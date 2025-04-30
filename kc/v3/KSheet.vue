<script>
import {unitgen} from "../tools.js";
import {useSlots, h, defineComponent} from 'vue'

export default defineComponent({
  name: 'KSheet',
  props: {
    tag: {type: String, default: 'div'},
    color: {type: String, default: ''},
    maxWidth: {type: String, default: ''},
    maxHeight: {type: String, default: ''},
    minWidth: {type: String, default: ''},
    minHeight: {type: String, default: ''},
    width: {type: String, default: ''},
    height: {type: String, default: ''},
    overflow: {type: String, default: ''},
  },
  setup(props) {
    const slots = useSlots()
    return () => h(props.tag || 'div', {
      class: 'k-sheet',
      style: {
        'background-color': props.color,
        width: unitgen(props.width),
        height: unitgen(props.height),
        overflow: props.overflow,
        'max-width': unitgen(props.maxWidth),
        'max-height': unitgen(props.maxHeight),
        'min-width': unitgen(props.minWidth),
        'min-height': unitgen(props.minHeight)
      }
    }, slots.default?.())
  }
})
</script>

<template>

</template>

<style>

</style>