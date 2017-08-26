import Vue from 'vue'
import Vuex from 'vuex'
import Counts from './counts'
import Auth from './auth'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    Counts,
    Auth
  },
  strict: debug
})
