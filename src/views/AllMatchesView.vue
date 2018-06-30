<template>
  <div>
    <div 
      v-if="loading" 
      class="mdl-spinner mdl-js-spinner is-active"
    />

    <div 
      v-if="allMatches && allMatches.length > 0"
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
    this.loading = true
    this.$store.dispatch('fetchAllMatches')
      .then(() => {
        this.loading = false
      })
  },
  computed: {
    allMatches () {
      return this.$store.getters.getAllMatches
    }
  },
  data () {
    return {
      loading: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.mdl-spinner {
  justify-content: center;
}

</style>
