import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a7cf834 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _e8357994 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _049a2de1 = () => interopDefault(import('..\\pages\\uc.vue' /* webpackChunkName: "pages/uc" */))
const _48d85890 = () => interopDefault(import('..\\pages\\editor\\new.vue' /* webpackChunkName: "pages/editor/new" */))
const _711f4cd2 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _3ba3e84c = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _2119e0cf = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _2a7cf834,
    name: "login"
  }, {
    path: "/register",
    component: _e8357994,
    name: "register"
  }, {
    path: "/uc",
    component: _049a2de1,
    name: "uc"
  }, {
    path: "/editor/new",
    component: _48d85890,
    name: "editor-new"
  }, {
    path: "/article/:id?",
    component: _711f4cd2,
    name: "article-id"
  }, {
    path: "/user/:id?",
    component: _3ba3e84c,
    name: "user-id"
  }, {
    path: "/",
    component: _2119e0cf,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
