<template>
  <div class="mdl-card mdl-shadow--2dp">
    <div class="mdl-title">
      <h2 class="mdl-card__title-text">
        Ingen pågående match
      </h2>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NoMatchCard',
  props: {
  },
}
</script>

<style lang="scss" scoped>
.mdl-card {
  width: 100%;
}

.mdl-title {
  padding: 1rem;
  h2 {
    justify-content:center; 
  }
}
</style>

