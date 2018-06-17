<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import LandingView from './views/LandingView.vue'

export default {
  name: 'App',
  components: {
    LandingView,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
