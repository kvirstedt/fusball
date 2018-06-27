<template>
  <div>
    <div v-if="currentMatches && currentMatches.length > 0">
      <div 
        :key="match.fifa_id" 
        v-for="match in currentMatches"
      >
        <MatchCard :match="match"/>
        <p/>
      </div>
    </div>
    <div v-else>
      <NoMatchCard/>
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/MatchCard'
import NoMatchCard from '@/components/NoMatchCard'

export default {
  name: 'CurrentMatchesView',
  components: {
    MatchCard,
    NoMatchCard,
  },
  created () {
    console.log('created')
    this.$store.dispatch('fetchCurrentMatches')
    this.intervalId = setInterval(function () {
      this.$store.dispatch('fetchCurrentMatches')
    }.bind(this), 30000)
  },
  destroyed () {
    console.log('destroyed')
    console.log(this.intervalId)
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  data () {
    return {
      intervalId: null,
    }
  },
  computed: {
    currentMatches () {
      return this.$store.getters.getCurrentMatches
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
