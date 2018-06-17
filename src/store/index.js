import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    matches: null,
    currentMatches: null,
    todaysMatches: null,
  },
  getters: {
  },
  mutations: {
    SET_MATCHES (state, matches) {
      state.matches = matches
    },
    SET_CURRENT_MATCHES (state, matches) {
      state.currentMatches = matches
    },
    SET_TODAYS_MATCHES (state, matches) {
      state.todaysMatches = matches
    },
  },
  actions: {
    fetchMatches ({commit}) {
      return api.matches.getMatches()
        .then(({data: matches}) => {
          commit('SET_MATCHES', matches)
        })
    },
    fetchCurrentMatches ({commit}) {
      return api.matches.getCurrentMatches()
        .then(({data: matches}) => {
          commit('SET_CURRENT_MATCHES', matches)
        })
    },
    fetchTodaysMatches ({commit}) {
      return api.matches.getTodaysMatches()
        .then(({data: matches}) => {
          commit('SET_TODAYS_MATCHES', matches)
        })
    }
  },
  modules: {
  }
})