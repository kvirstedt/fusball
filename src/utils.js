import Vue from 'vue'

class StateCache {
  constructor () {
    this.fetching = {}
    this.expireMs = 29 * 1000
  }

  set (state, key, value) {
    let envelope = {
      value: value,
      expire: Date.now() + this.expireMs
    }
    Vue.set(state, key, envelope)
  }

  get (state, key) {
    if (key in state) {
      return state[key].value
    }
  }

  isFresh (state, key) {
    if (key in state) {
      if (state[key].expire > Date.now()) {
        return true
      }
    }
    return false
  }
}

export default {

  StateCache,

  matchStatus : [
    'completed',
    'future',
    'in progress',
  ],

  fetchFlagUrl: (code) => {
    if (code === 'ENG') {
      code = 'gbr'
    }
    return `https://restcountries.eu/data/${code.toLowerCase()}.svg`
  },
}