import authService from '@/api/auth'

export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        setLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        },
        setLogout(state) {
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login( { commit }, user) {
            try {
                const userInfo = await authService.login(user)
                commit('setLoginInfo', userInfo)
                return Promise.resolve(userInfo)
            } catch (e) {
                commit('setLogout')
                return  Promise.reject(e)
            }
        },
        loggout( { commit }) {
            commit('setLogout')
        }   
    }
}