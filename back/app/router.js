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
    router.post('/user/login', controller.user.login)
    router.get('/user/detail', jwt, controller.user.detail)
    router.get('user/article/:id', jwt, controller.user.articleStatus)
    router.get('user/isfollow/:id',jwt, controller.user.isFollow)
    // router.put('user/follow/:id', jwt, controller.user.follow);
    // router.delete('user/follow/:id', jwt, controller.user.unfollow);
    // router.get('user/:id/following', controller.user.following);
    // router.get('user/:id/followers', controller.user.followers);
    // router.put('user/likeArticle/:id', jwt, controller.user.likeArticle);
    // router.delete('user/likeArticle/:id', jwt, controller.user.cancelLikeArticle);
    // router.put('user/dislikeArticle/:id', jwt, controller.user.dislikeArticle);
    // router.delete('user/dislikeArticle/:id', jwt, controller.user.cancelDislikeArticle);

    router.post('/article/create', jwt, controller.article.create)
    router.get('/article/:id', jwt, controller.article.detail)

};