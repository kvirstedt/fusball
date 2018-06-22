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
    teamMatches: null,
    countries: [],
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
    getTeamMatches: (state) => {
      return state.teamMatches
    },
    getFlag: (state) => (countryName) => {
      const countries = stateCache.get(state, 'countries')
      if (countries) {
        let c = countries.find(country => country.name === countryName)
        if (c && c.flag) {
          return c.flag
        }
      }
    }
  },
  mutations: {
    SET_ALL_MATCHES (state, matches) {
      stateCache.set(state, 'allMatches', matches)
    },
    SET_CURRENT_MATCHES (state, matches) {
      stateCache.set(state, 'currentMatches', matches)
    },
    SET_TODAYS_MATCHES (state, matches) {
      stateCache.set(state, 'todaysMatches', matches)
    },
    SET_TEAM_MATCHES(state, teamMatches) {
      state.teamMatches = teamMatches
    },
    SET_COUNTRIES (state, countries) {
      stateCache.set(state, 'countries', countries)
    },
  },
  actions: {
    fetchAllMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'allMatches')) {
        return
      }
      if (stateCache.isFetching('allMatches')) {
        return
      }
      stateCache.setFetching('allMatches')
      return api.matches.getMatches()
        .then(({data: matches}) => {
          commit('SET_ALL_MATCHES', matches)
          stateCache.setFetched('allMatches')
        })
    },
    fetchCurrentMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'currentMatches')) {
        return
      }
      if (stateCache.isFetching('currentMatches')) {
        return
      }
      stateCache.setFetching('currentMatches')
      return api.matches.getCurrentMatches()
        .then(({data: matches}) => {
          commit('SET_CURRENT_MATCHES', matches)
          stateCache.setFetched('currentMatches')
        })
    },
    fetchTodaysMatches ({state, commit}) {
      if (stateCache.isFresh(state, 'todaysMatches')) {
        return
      }
      if (stateCache.isFetching('todaysMatches')) {
        return
      }
      stateCache.setFetching('todaysMatches')
      return api.matches.getTodaysMatches()
        .then(({data: matches}) => {
          commit('SET_TODAYS_MATCHES', matches)
          stateCache.setFetched('todaysMatches')
        })
    },
    fetchTeamMatches({state, commit}, team) {
      return api.team.getTeamMatches(team)
        .then(({data: fetchedTeamMatches}) => {
          commit('SET_TEAM_MATCHES', fetchedTeamMatches)
        })
    },
    fetchCountries ({state, commit}) {
      if (stateCache.isFresh(state, 'countries')) {
        return
      }
      if (stateCache.isFetching('countries')) {
        return
      }
      stateCache.setFetching('countries')
      return api.country.getCountries()
        .then(({data: countries}) => {
          commit('SET_COUNTRIES', countries)
          stateCache.setFetched('countries')
        })
    },
  },
  modules: {
  }
})