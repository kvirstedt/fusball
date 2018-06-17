<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col mdl-cell--1-col-tablet mdl-cell--hide-phone"/>
    <div class="mdl-cell mdl-cell--4-col">
      <div 
        :key="match.fifa_id" 
        v-for="match in currentMatches"
      >
        <MatchCard :match="match"/>
        <p/>
      </div>
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
    this.$store.dispatch('fetchCurrentMatches')
  },
  computed: {
    currentMatches () {
      return this.$store.state.currentMatches
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
