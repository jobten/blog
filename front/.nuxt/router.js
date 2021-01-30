import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _98ffbed4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _69a12886 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _41404f31 = () => interopDefault(import('../pages/uc.vue' /* webpackChunkName: "pages/uc" */))
const _3b6b77a1 = () => interopDefault(import('../pages/editor/new.vue' /* webpackChunkName: "pages/editor/new" */))
const _824d3ae4 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _0a6835d9 = () => interopDefault(import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _2c4f0502 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _98ffbed4,
    name: "login"
  }, {
    path: "/register",
    component: _69a12886,
    name: "register"
  }, {
    path: "/uc",
    component: _41404f31,
    name: "uc"
  }, {
    path: "/editor/new",
    component: _3b6b77a1,
    name: "editor-new"
  }, {
    path: "/article/:id?",
    component: _824d3ae4,
    name: "article-id"
  }, {
    path: "/user/:id?",
    component: _0a6835d9,
    name: "user-id"
  }, {
    path: "/",
    component: _2c4f0502,
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
