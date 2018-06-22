import axios from 'axios'

const api = {
  MATCH_BASE_URL: 'http://worldcup.sfg.io',
  COUNTRY_BASE_URL: 'https://restcountries.eu/rest/v2',

  getMatchApi(path) {
    return axios.get(`${this.MATCH_BASE_URL}${path}`)
  },
  getCountryApi(path) {
    return axios.get(`${this.COUNTRY_BASE_URL}${path}`)
  },

  matches: {
    getMatches() {
      return api.getMatchApi('/matches')
    },
    getCurrentMatches() {
      return api.getMatchApi(`/matches/current`)
    },
    getTodaysMatches() {
      return api.getMatchApi(`/matches/today`)
    },
  },

  team: {
    getTeamMatches (team) {
      return api.getMatchApi(`/matches/country?fifa_code=${team}`)
    },
  },

  country: {
    getCountry(country) {
      return api.getCountryApi(`/name/${country}`)
    },
    getCountries(country) {
      return api.getCountryApi(`/all`)
    },
  }
}

export default api
