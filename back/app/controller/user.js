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
        let like = !! me.likeArticle.find(id => id.toString() === ctx.params.id)
        let dislike = !!me.dislikeArticle.find(id=>id.toString()==ctx.params.id)   
        this.success({
          like,dislike
        }) 
    }

    async isFollow() {
        
    }
}

module.exports = UserController