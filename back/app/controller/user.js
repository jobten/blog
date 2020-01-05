'use strict'

const BaseController = require('./base')
const md5 = require('md5')

class UserController extends BaseController {
    async index() {
        const { ctx } = this
        ctx.body = '用户信息'
    }

    async checkEmail(email) {
        const { ctx } = this

        const user = await ctx.model.User.findOne({ email })
        return user
    }

    async captcha() {
        const { ctx } = this
        const captcha = await this.service.tools.captcha()

        ctx.session.captcha = captcha.text

        console.log('图片验证码' + captcha.text)
        ctx.response.type = 'image/svg+xml'
        ctx.body = captcha.data
    }
    async email() {
        const { ctx } = this
        const email = ctx.query.email
        const code = Math.random().toString().slice(2, 6)

        console.log('邮件' + email + ' 邮箱验证码：' + code)
        const title = '分享平台注册验证码'
        const html = `
            <h1>分享平台注册验证码</h1>
            <div>
                <a href="http://www.pax.cn/">${code}</a>
            </div>
        `
        const hasSend = await this.service.tools.sendEmail(email, title, html)
        if (hasSend) {
            ctx.session.emailcode = code
            this.message('发送成功')
        } else {
            this.error('发送失败')
        }
    }
    async create() {
        const { ctx } = this
        const { email, password, emailcode, captcha, nickname } = ctx.request.body

        console.log('ctx.session.emailcode - ', ctx.session.emailcode)

        console.log('ctx.request.body - ', ctx.request.body)
        if (emailcode !== ctx.session.emailcode) {
            return this.error('邮箱验证码出错')
        }
        if (captcha.toUpperCase() !== ctx.session.captcha.toUpperCase()) {
            return this.error('图片验证码错误')
        }
        if (await this.checkEmail(email)) {
            return this.error('邮箱已经存在')
        }

        const ret = await ctx.model.User.create({
            email,
            nickname,
            password: md5(password)
        })
        if (ret._id) {
            this.success('注册成功')
        }

    }

    async login() {
        const { ctx, app } = this
        const { email, password } = ctx.request.body

        const user = await ctx.model.User.findOne({
            email,
            password: md5(password)
        })

        if (user) {
            const { nickname } = user
            const token = app.jwt.sign({
                nickname,
                email,
                id: user._id
            }, app.config.jwt.secret, {
                expiresIn: '1h'
            })
            this.success({ token, email })
        } else {
            this.error('用户名或者密码错误')
        }
    }

    async detail() {
        const { ctx } = this
        const user = await this.checkEmail(ctx.state.email)
        this.success(user)
    }

    async articleStatus() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const like = !! me.likeArticle.find(id => id.toString() === ctx.params.id)
        const dislike = !!me.dislikeArticle.find(id=>id.toString()==ctx.params.id)   
        this.success({
          like,
          dislike
        }) 
    }

    async isFollow() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const isFollow = !! me.following.find(id => id.toString() === ctx.params.id)

        this.success({
            isFollow
        })
    }

    async follow() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const isFollow = !! me.following.find(id => id.toString() === ctx.params.id)

        if (!isFollow) {
            me.following.push(ctx.params.id)
            me.save()
            this.message('关注成功')
        }
    }

    async unfollow() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const index = me.following.map(id => id.toString()).indexOf(ctx.params.id)
        if (index > -1) {
            me.following.splice(ctx.state.userid)
            me.save()
            this.message('取消关注成功')
        }
    }

    async likeArticle() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const like = me.likeArticle.find(id => id.toString() === ctx.params.id)
        if (!like) {
            me.likeArticle.push(this.ctx.params.id)
            me.save()
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { like: 1 } });
            return this.message('成功点赞')
        }
        this.message('已经赞过了')
    }

    async cancelLikeArticle() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const index = me.likeArticle.map(id => id.toString()).indexOf(ctx.params.id)
        if (index > -1 ) {
            me.likeArticle.splice(this.ctx.params.id)
            me.save()
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { like: -1 } });
            return this.message('成功取消点赞')
        }
        this.message('已经取消了')
    }
    async dislikeArticle() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const dislike = me.dislikeArticle.find(id => id.toString() === ctx.params.id)
        if (!dislike) {
            me.dislikeArticle.push(this.ctx.params.id)
            me.save()
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { dislike: 1 } });
            return this.message('成功踩')
        }
        this.message('已经踩了')
    }
    async cancelDislikeArticle() {
        const { ctx } = this
        const me = await ctx.model.User.findById(ctx.state.userid)
        const index = me.dislikeArticle.map(id => id.toString()).indexOf(ctx.params.id)
        if (index > -1 ) {
            me.dislikeArticle.splice(this.ctx.params.id)
            me.save()
            await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { dislike: -1 } });
            return this.message('成功取消点赞')
        }
        this.message('已经取消了')
    }

    async following(){
        const {ctx} = this    
        const users = await ctx.model.User.findById(ctx.params.id).populate('following');
        this.success(users.following)
    }
    
    async followers(){
    const {ctx} = this
    const users = await ctx.model.User.find({ following: ctx.params.id });
    this.success(users)

    }
}

module.exports = UserController