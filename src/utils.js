export default {
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