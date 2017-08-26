/**
 * Created by supakrit on 8/14/2017 AD.
 */
const state = {
  isAuth: false
}
const mutations = {
  LOGIN (state) {
    state.isAuth = true
  },
  LOGOUT (state) {
    state.isAuth = false
  }
}
const actions = {
  login: ({commit}, amount) => commit('LOGIN'),
  logout: ({commit}, amount) => commit('LOGOUT')
}
const getters = {
  auth: state => state.isAuth
}
export default {
  state,
  getters,
  mutations,
  actions
}
