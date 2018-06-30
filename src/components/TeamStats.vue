<template>
  <div class="teamstats">
    <ul class="mdl-list">
      <StatList
        label="Bollinnehav"
        :value="stats.ball_possession"
        unit="%"
      />
      <StatList
        label="Passningar"
        :value="stats.passes_completed"
      />
      <StatList
        label="Korrekta passningar"
        :value="stats.pass_accuracy"
        unit="%"
      />
      <StatList
        label="Hörnor"
        :value="stats.corners"
      />
      <StatList
        label="Skott mot mål"
        :value="stats.attempts_on_goal"
      />
      <StatList
        label="Skott på mål"
        :value="stats.on_target"
      />
      <StatList
        label="Offsides"
        :value="stats.offsides"
      />
      <StatList
        label="Tacklingar"
        :value="stats.tackles"
      />
      <StatList
        label="Gula kort"
        :value="stats.yellow_cards"
      />
      <StatList
        label="Röda kort"
        :value="stats.red_cards"
      />
      <StatList
        label="Sprugna kilometer"
        :value="stats.distance_covered"
        unit="km"
      />
    </ul>
  </div>
  
</template>

<script>
import StatList from '@/components/StatList'

export default {
  name: 'TeamStats',
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  components: {
    StatList,
  },
  created () {
    console.log(this.stats)
  }
}
</script>

<style lang="scss" scoped>
.teamstats {
  width: 100%;
  // border: solid 1px red;
}
.awayteam {
  // text-align: right;
}
.mdl-list__item--two-line {
  height: 40px !important;
}

</style>
