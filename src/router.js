import Vue from 'vue'
import Router from 'vue-router'

import LandingView from '@/views/LandingView'
import CurrentMatchesView from '@/views/CurrentMatchesView'
import TodaysMatchesView from '@/views/TodaysMatchesView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: LandingView,
    },
    {
      path: '/current',
      name: 'CurrentMatchesView',
      component: CurrentMatchesView,
    },
    {
      path: '/today',
      name: 'TodaysMatchesView',
      component: TodaysMatchesView,
    },
  ],
})

export default router
