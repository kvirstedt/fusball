import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import utils from '@/utils'

Vue.use(Vuex)

const stateCache = new utils.StateCache()

export default new Vuex.Store({
  state: {
    allMatches: [],
    currentMatches: [],
    todaysMatches: [],
    countries: null,
  },
  getters: {
    getAllMatches: (state) => {
      return stateCache.get(state, 'allMatches')
    },
    getTodaysMatches: (state) => {
      return stateCache.get(state, 'todaysMatches')
    },
    getCurrentMatches: (state) => {
      return stateCache.get(state, 'currentMatches')
    },
    getFlag: (state) => (countryName) => {
      if (state.countries) {
        let c = state.countries.find(country => country.name === countryName)
        if (c && c.flag) {
          return c.flag
        }
      }
    }
  },
  mutations: {
    SET_MATCHES (state, matches) {
      stateCache.set(state, 'allMatches', matches)
    },
    SET_CURRENT_MATCHES (state, matches) {
      stateCache.set(state, 'currentMatches', matches)
    },
    SET_TODAYS_MATCHES (state, matches) {
      stateCache.set(state, 'todaysMatches', matches)
    },
    SET_COUNTRIES (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    fetchMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'allMatches')) {
        return
      }
      return api.matches.getMatches()
        .then(({data: matches}) => {
          commit('SET_MATCHES', matches)
        })
    },
    fetchCurrentMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'currentMatches')) {
        return
      }
      return api.matches.getCurrentMatches()
        .then(({data: matches}) => {
          commit('SET_CURRENT_MATCHES', matches)
        })
    },
    fetchTodaysMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'todaysMatches')) {
        return
      }
      return api.matches.getTodaysMatches()
        .then(({data: matches}) => {
          commit('SET_TODAYS_MATCHES', matches)
        })
    },
    fetchCountries ({commit}) {
      return api.country.getCountries()
        .then(({data: countries}) => {
          commit('SET_COUNTRIES', countries)
        })
    },
  },
  modules: {
  }
})