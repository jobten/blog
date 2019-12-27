import { http } from "../plugins/axios"

const state = () => ({
    token: '',
    id: '',
    email: "",
    nickname: "",
    avatar: ''
})

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER(state, user) {
        state.id = user._id
        state.email = user.email
        state.nickname = user.nickname
        state.avatar = user.avatar
    }
}
const actions = {
    login: async({ state, commit }, data) => {
        const ret = await http.post('user/login', data)
        console.log('login data - ', data)

        commit('SET_TOKEN', ret.data.token)
        return ret
    },
    detail: async({ state, commit }, data) => {
        const ret = await http.get('/user/detail')
        if (ret.code === 0) {
            console.log('setuser', ret.data)
            commit('SET_USER', ret.data)
            return ret
        }
    }
}

export default {
    namespace: true,
    state,
    mutations,
    actions
}
