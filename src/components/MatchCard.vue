<template>
  <div class="mdl-card mdl-shadow--4dp">

    <div class="mdl-title">
      <h2 class="mdl-card__title-text">
        <img 
          v-if="homeTeamFlag"
          :src="homeTeamFlag" 
          class="flag"
          width="40"
          height="25" 
        >
        <router-link :to="{ name: 'TeamMatchesView', params: { fifa_id: match.home_team.code }}">
          {{ match.home_team.country }}
        </router-link>
        <router-link :to="{ name: 'TeamMatchesView', params: { fifa_id: match.away_team.code }}">
          {{ match.away_team.country }}
        </router-link>
        <img 
          v-if="awayTeamFlag"
          :src="awayTeamFlag" 
          class="flag"
          width="40"
          height="25" 
        >
      </h2>
      <h2 class="mdl-card__title-text">
        <div 
          class="score"
          :class="{blink: lastTeamToScore === 'home'}"
        >
          {{ match.home_team.goals }}
        </div>
        <div 
          class="score"
          :class="{blink: lastTeamToScore === 'away'}"
        >
          {{ match.away_team.goals }}
        </div>
      </h2>
    </div>

    <div class="mdl-card__suporting-text">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--5-col mdl-cell--2-col-phone">
          <Events :events="match.home_team_events"/>
        </div>
        <div class="mdl-cell mdl-cell--2-col mdl-cell mdl-cell--hide-phone"/>
        <div class="mdl-cell mdl-cell--5-col mdl-cell--2-col-phone">
          <Events 
            :events="match.away_team_events" 
            :away-team="true"
          />
        </div>
      </div>
    </div>

    <div class="mdl-card__suporting-text">
      <ul class="mdl-list">
        <li class="mdl-list__item">
          <i class="material-icons mdl-list__item-icon">location_on</i>
          <span class="mdl-list__item-primary-content">
            Plats: {{ match.venue }}
          </span>  
        </li>
        <li class="mdl-list__item">
          <i class="material-icons mdl-list__item-icon">date_range</i>
          <span class="mdl-list__item-primary-content">
            Datum: {{ startTime }}
          </span>  
        </li>
      </ul>
      {{ match.time }}
    </div>
    <div 
      v-if="match.status === 'in progress'"
      class="mdl-card__actions mdl-card--border"
    >
      <span class="blink live">
        LIVE
      </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import utils from '@/utils'
import Events from '@/components/Events'

export default {
  name: 'MatchCard',
  props: {
    match: {
      type: Object,
      required: true,
    }
  },
  components: {
    Events,
  },
  computed: {
    startTime () {
      moment.locale('sv-SE')
      return moment(this.match.datetime).calendar()
      // return moment(this.match.datetime).format('dddd, D MMMM ')
    },
    homeTeamFlag () {
      let flag = this.$store.getters.getFlag(this.match.home_team.country)
      if (!flag) {
        if (this.match.home_team.code === 'TBD') {
          return ''
        }
        flag = utils.fetchFlagUrl(this.match.home_team.code)
      }
      return flag
    },
    awayTeamFlag () {
      let flag = this.$store.getters.getFlag(this.match.away_team.country)
      if (!flag) {
        if (this.match.home_team.code === 'TBD') {
          return ''
        }
        flag = utils.fetchFlagUrl(this.match.away_team.code)
      }
      return flag
    },
    away_goals () {
      return this.match.away_team.goals
    },
    home_goals () {
      return this.match.home_team.goals
    }
  },
  watch: {
    away_goals (newGoals, oldGoals) {
      console.log('away_goals')
      if (newGoals > oldGoals) {
        this.lastTeamToScore = 'away'
        console.log('away_goals', newGoals, oldGoals)
      }
    },
    home_goals (newGoals, oldGoals) {
      console.log('home_goals')
      if (newGoals > oldGoals) {
        this.lastTeamToScore = 'home'
        console.log('home_goals', newGoals, oldGoals)
      }
    }
  },
  data () {
    return {
      lastTeamToScore: '',
    }
  },
  methods: {
    teamClick () {

    },
  }
}
</script>

<style lang="scss" scoped>
.mdl-card {
  width: 100%;
}

.live {
  color: red;
  font-weight: bold;
  margin-left: 1rem;
}
.blink {
  animation: blinker 2s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.score {
  margin-top:10px;
  font-size: 25px;
}
.mdl-title {
  padding-top: 1rem;
  .mdl-card__title-text {
    justify-content: space-evenly; 
    font-size: 20px;
    img {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    a {
      text-decoration: none; 
      color:black;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
}
// .flag {
//   border: solid 1px gray;
// }
</style>

