<template>
  <div>
    <div 
      v-if="loading" 
      class="mdl-spinner mdl-js-spinner is-active"
    />
    <div v-if="currentMatches && currentMatches.length > 0">
      <div 
        v-if="false"
        :key="match.fifa_id" 
        v-for="match in currentMatches"
      >
        <MatchCard :match="match"/>
        <p/>
      </div>
    </div>
    <div v-else-if="!loading">
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
    this.loading = true
    this.$store.dispatch('fetchCurrentMatches')
      .then(() => {
        this.loading = false
      })
    this.intervalId = setInterval(function () {
      this.$store.dispatch('fetchCurrentMatches')
    }.bind(this), 30000)
  },
  destroyed () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  data () {
    return {
      intervalId: null,
      loading: false,
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
