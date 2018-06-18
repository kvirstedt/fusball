<template>
  <div>
    <div 
      v-if="!allMatches" 
      class="mdl-spinner mdl-js-spinner is-active"
    />

    <div 
      :key="match.fifa_id" 
      v-for="match in allMatches"
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
    this.$store.dispatch('fetchMatches')
  },
  computed: {
    allMatches () {
      return this.$store.state.matches
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.mdl-spinner {
  justify-content: center;
}

</style>
