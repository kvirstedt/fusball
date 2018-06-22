<template>
  <div>
    <div 
      v-if="!allMatches" 
      class="mdl-spinner mdl-js-spinner is-active"
    />

    <div 
      v-if="allMatches"
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
  name: 'AllMatchesView',
  components: {
    MatchCard,
  },
  created () {
    this.$store.dispatch('fetchAllMatches')
  },
  computed: {
    allMatches () {
      return this.$store.getters.getAllMatches
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
