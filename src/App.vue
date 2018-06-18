<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Fusball</span>
        </div>
      </header>

      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Fusball</span>
        <nav class="mdl-navigation">
          <router-link
            class="mdl-navigation__link"
            to="/current"
            @click.native="hideMenu"
          >
            Pågående matcher
          </router-link>
          <router-link
            class="mdl-navigation__link"
            to="/today"
            @click.native="hideMenu"
          >
            Dagens matcher
          </router-link>
          <router-link
            class="mdl-navigation__link"
            to="/all"
            @click.native="hideMenu"
          >
            Alla matcher
          </router-link>
        </nav>
      </div>

      <main class="mdl-layout__content">
        <div class="page-content">
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--hide-phone"/>
            <div class="mdl-cell mdl-cell--4-col">
              <router-view/>
            </div>
          </div>
        </div>
      </main>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('creating App')
    this.$store.dispatch('fetchCountries')
  },
  methods: {
  hideMenu: function (event) {
    document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
    document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
  },
}

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
