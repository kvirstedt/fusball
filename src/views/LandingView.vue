<template>
  <div>
    <div 
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
    console.log('created')
    this.$store.dispatch('fetchCurrentMatches')
    this.$store.dispatch('fetchTodaysMatches')
  },
  computed: {
    matches () {
      return this.$store.state.matches
    },
    currentMatches () {
      return this.$store.state.currentMatches
    },
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
