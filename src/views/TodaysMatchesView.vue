<template>
  <div>
    <div 
      v-if="!todaysMatches" 
      class="mdl-spinner mdl-js-spinner is-active"
    />
    <div 
      v-if="todaysMatches"
      :key="match.fifa_id" 
      v-for="match in todaysMatches"
    >
      <MatchCard :match="match"/>
      <p/>
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/MatchCard'

export default {
  name: 'LandingView',
  components: {
    MatchCard,
  },
  created () {
    this.$store.dispatch('fetchTodaysMatches')
  },
  computed: {
    todaysMatches () {
      return this.$store.state.todaysMatches
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
