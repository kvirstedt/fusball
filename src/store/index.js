import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    matches: null,
  },
  getters: {
  },
  mutations: {
    SET_MATCHES (state, matches) {
      state.matches = matches
    }
  },
  actions: {
    fetchMatches ({commit}) {
      return api.matches.getMatches()
        .then(({data: matches}) => {
          commit('SET_MATCHES', matches)
        })
    }
  },
  modules: {
  }
})