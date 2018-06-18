export default {
  matchStatus : [
    'completed',
    'future',
    'in progress',
  ],
  fetchFlagUrl: (code) => {
    return `https://restcountries.eu/data/${code.toLowerCase()}.svg`
  }
}