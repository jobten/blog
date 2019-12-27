module.exports = ({ app }) => {
    return async function verify(ctx, next) {
        const token = ctx.request.header.authorization.replace('Bearer ', '')
        try {
            const ret = await app.jwt.verify(token, app.config.jwt.secret)
            console.log('中间件获取token信息', ret)
            ctx.state.email = ret.email
            ctx.state.userid = ret.id
            await next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                ctx.state.email = ''
                ctx.state.userid = ''

                return ctx.body = {
                    code: -666,
                    message: 'token过期了，请登录'
                }
            }
            console.log('jwt.verify error ', error)
        }
    }
}