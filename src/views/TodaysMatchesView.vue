<template>
  <div>
    <div 
      v-if="loading" 
      class="mdl-spinner mdl-js-spinner is-active"
    />
    <div v-if="todaysMatches && todaysMatches.length > 0">
      <div 
        :key="match.fifa_id" 
        v-for="match in todaysMatches"
      >
        <MatchCard :match="match"/>
        <p/>
      </div>
    </div>
    <div v-else-if="!loading">
      <NoMatchCard label="Inga matcher idag"/>
    </div>
  </div>
</template>

<script>
import MatchCard from '@/components/MatchCard'
import NoMatchCard from '@/components/NoMatchCard'

export default {
  name: 'TodaysMatchesView',
  components: {
    MatchCard,
    NoMatchCard,
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchTodaysMatches')
      .then(() => {
        this.loading = false
      })
    this.intervalId = setInterval(function () {
      this.$store.dispatch('fetchTodaysMatches')
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
    todaysMatches () {
      return this.$store.getters.getTodaysMatches
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
