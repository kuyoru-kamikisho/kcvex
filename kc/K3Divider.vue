<script setup>
import {h, getCurrentInstance} from 'vue'

const vm = getCurrentInstance()

const props = defineProps({
  tag: {type: String, default: 'div'},
  color: {type: String, default: 'rgb(29,129,244)'},
  width: {type: String, default: '100%'},
  height: {type: String, default: '2px'},
  margin: {type: String, default: '0 0 0 0'}
})

vm.render = () => h(props.tag || 'div', {
  class: 'k-divider',
  style: {
    'background-color': props.color,
    width: props.width,
    height: props.height,
    margin: props.margin,
  }
})
</script>

<template>

</template>

<style>

</style>