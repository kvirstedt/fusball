<template>
  <li class="mdl-list__item--two-line">
    <span class="mdl-list__item-primary-content">
      {{ label }}
      <span class="mdl-list__item-sub-title">
        {{ value }} {{ unit }}
      </span>  
    </span>
  </li>
  
</template>

<script>
export default {
  name: 'StatList',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    unit: {
      type: String,
      default: '',
      required: false,
    }
  }
}
</script>

<style>
.mdl-list__item--two-line {
  height: 40px !important;
}
</style>
