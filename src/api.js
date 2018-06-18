import axios from 'axios'

const api = {
  BASE_URL: 'http://worldcup.sfg.io',

  url(path) {
    return `${this.BASE_URL}${path}`
  },

  get(path, params) {
    return axios.get(this.url(path), { params: params })
  },
  post(path, params) {
    return axios.post(this.url(path), { params: params })
  },
  put(path, params) {
    return axios.put(this.url(path), { params: params })
  },
  del(path, params) {
    return axios.delete(this.url(path), { params: params })
  },

  matches: {
    getMatches() {
      return api.get('/matches?by_date=asc')
    },
    getCurrentMatches() {
      return api.get(`/matches/current`)
    },
    getTodaysMatches() {
      return api.get(`/matches/today`)
    },
  },
}

export default api
