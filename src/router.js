import Vue from 'vue'
import Router from 'vue-router'

import LandingView from '@/views/LandingView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: LandingView,
    },
  ],
})

export default router
