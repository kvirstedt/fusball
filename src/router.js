import Vue from 'vue'
import Router from 'vue-router'

import LandingView from '@/views/LandingView'
import CurrentMatchesView from '@/views/CurrentMatchesView'
import TodaysMatchesView from '@/views/TodaysMatchesView'
import AllMatchesView from '@/views/AllMatchesView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingView',
      component: TodaysMatchesView,
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
    {
      path: '/all',
      name: 'AllMatchesView',
      component: AllMatchesView,
    },
  ],
})

export default router
