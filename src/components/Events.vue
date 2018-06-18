<template>
  <div class="events">
    <ul class="mdl-list">
      <li 
        class="mdl-list__item--two-line"
        v-for="event in events"
        :key="event.id"
      >
        <span class="mdl-list__item-primary-content">
          <span>{{ event.type_of_event }}</span>
          <span class="mdl-list__item-sub-title">
            {{ event.time }}
          </span>  
        </span>  
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'Events',
  props: {
    events: {
      type: Array,
      required: true,
    }
  }


}
</script>

<style lang="scss" scoped>
.events {
  width: 100%;
  border: solid 1px red;
}
.mdl-list__item--two-line {
  height: 40px !important;
}

</style>
