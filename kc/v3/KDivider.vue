<script>
import {unitgen} from "../tools.js";
import {h, defineComponent} from 'vue';

export default defineComponent({
  name: 'KDivider',
  props: {
    tag: {type: String, default: 'div'},
    color: {type: String, default: 'rgb(29,129,244)'},
    width: {type: String, default: '100%'},
    height: {type: String, default: '2'},
    margin: {type: String, default: '0 0 0 0'}
  },
  setup(props) {
    return () => h(props.tag || 'div', {
      class: 'k-divider',
      style: {
        'background-color': props.color,
        width: unitgen(props.width),
        height: unitgen(props.height),
        margin: props.margin,
      }
    })
  }
})
</script>

<template>

</template>

<style>

</style>