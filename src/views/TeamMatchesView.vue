<template>
  <div>
    <div 
      v-if="!teamMatches" 
      class="mdl-spinner mdl-js-spinner is-active"
    />
    <div 
      v-for="match in teamMatches"
      :key="match.fifa_id"
    >
      <MatchCard :match="match"/>
      <p/>
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/MatchCard'

export default {
  name: 'TeamMatchesView',
  components: {
    MatchCard,
  },
  created () {
    console.log('created TeamMatchesView')
    this.$store.dispatch('fetchTeamMatches', this.$route.params.fifa_id)
  },
  computed: {
    teamMatches () {
      console.log('compjut')
      return this.$store.state.teamMatches
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.$store.dispatch('fetchTeamMatches', to.params.fifa_id)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
