<template>
  <div class="mdl-card mdl-shadow--2dp">
    <div class="mdl-title">
      <h2 class="mdl-card__title-text">
        {{ match.home_team.country }} - {{ match.away_team.country }}
      </h2>
      <h2 class="mdl-card__title-text">
        {{ match.home_team.goals }} - {{ match.away_team.goals }}
      </h2>
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
            Tid: {{ startTime }}
          </span>  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MatchCard',
  props: {
    match: {
      type: Object,
      required: true,
    }
  },
  computed: {
    startTime () {
      moment.locale('sv-SE')
      return moment(this.match.datetime).calendar()
    }
  },
  // data () {
  //   return {
  //     startTime,
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.mdl-card{
  width: 100%;
}

.mdl-title {
  h2 {
    justify-content:center; 
  }
}
</style>

