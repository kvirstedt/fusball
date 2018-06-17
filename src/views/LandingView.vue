<template>
  <div>
    {{ matches }}
  </div>
</template>

<script>
export default {
  name: 'LandingView',
  created () {
    console.log('created')
    this.$store.dispatch('fetchMatches')
  },
  computed: {
    matches () {
      console.log(this.$store)
      return this.$store.state.matches
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
