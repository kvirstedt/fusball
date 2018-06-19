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
  name: 'TodaysMatchesView',
  components: {
    MatchCard,
  },
  created () {
    console.log('created TodaysMatchesView')
    this.$store.dispatch('fetchTodaysMatches')
  },
  computed: {
    todaysMatches () {
      // TODO: FIXME 
      let ret = this.$store.state.todaysMatches
      if (typeof ret !== 'string') {
        return ret
      }else{
        return null
      }
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
