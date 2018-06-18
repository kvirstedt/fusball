import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from '@/store'
import api from '@/api'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
