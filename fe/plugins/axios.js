import Vue from 'vue'
import axios from 'axios'

let service = axios.create({
    timeout: 5000,
    // 前缀
    baseURL: '/api'
})

const TOKEN_KEY = 'KKB_USER_TOKEN'

// @ todo 拦截器 管理token
export default ({ store, redirect }) => {
    service.interceptors.request.use(config => {
        console.log('请求拦截');

        // 请求添加Token
        const token = window.localStorage.getItem(TOKEN_KEY)
        if (token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            // Bearer 是JWT的认证头部信息
            config.headers.common['Authorzation'] = 'Bearer ' + token
        }

        return config
    }, error => {
        return Promise.reject(error)
    })

    service.interceptors.response.use(async response => {
        console.log('响应拦截');

        const { data, config } = response
        if (data.code === 0) {
            if (config.url === 'api/user/login') {
                localStorage.setItem(TOKEN_KEY, data.data.token)
            }
        } else if (data.code === -666) {
            // code是-666的 意味着token过期
            MessageBox.confirm('登录过期了', '过期', {
                confirmButtonText: '登录',
                showCancelButton: false,
                type: 'warning'
            }).then(() => {
                localStorage.removeItem(TOKEN_KEY)
                redirect({ path: '/login' })
            })
        }
        return data
    }, error => {
        return Promise.reject(error)
    })
}


Vue.prototype.$http = service

export const http = service
