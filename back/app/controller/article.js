'use strict'

const BaseController = require('./base')
const marked = require('marked')

class ArticleController extends BaseController {
    async create() {        
        const { ctx } = this
        const { userid } = ctx.state
        const { content } =  ctx.request.body
        
        const title = content.split('\n').find(v => {
            return v.indexOf('#') == 0
        })

        const obj = {
            title: title && title.replace ('#', '') || '无主题',
            article: content,
            article_html: marked(content),
            author: userid
        }

        let ret = await ctx.model.Article.create(obj)
        if (ret._id) {
            this.success({
                id:ret.id,
                title:ret.title
              })
        }else{
            this.error('创建失败')
        }
    }

    async detail() {
        const { ctx } = this
        const { id } = ctx.params
        let info = await ctx.model.Article.findById(id).populate('author')
        this.success(info)
    }
}

module.exports = ArticleController;
