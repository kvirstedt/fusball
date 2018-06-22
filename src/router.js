import Vue from 'vue'
import Router from 'vue-router'

import CurrentMatchesView from '@/views/CurrentMatchesView'
import TodaysMatchesView from '@/views/TodaysMatchesView'
import AllMatchesView from '@/views/AllMatchesView'
import TeamMatchesView from '@/views/TeamMatchesView'

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
    {
      path: '/team/:fifa_id',
      name: 'TeamMatchesView',
      component: TeamMatchesView,
    },
  ],
})

export default router
