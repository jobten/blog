'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

    const { router, controller } = app
    const jwt = app.middleware.jwt({ app })
    router.get('/userinfo', controller.user.index)


    router.get('/', controller.home.index);
    router.get('/user/captcha', controller.user.captcha)
    router.get('/user/sendcode', controller.user.email)
    router.post('/user/register', controller.user.create)

    router.get('/user/detail', jwt, controller.user.detail)
    router.post('/user/login', controller.user.login)
    router.post('/article/create', jwt, controller.article.create)
};