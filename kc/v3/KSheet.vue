<script>
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
        width: props.width,
        height: props.height,
        overflow: props.overflow,
        'max-width': props.maxWidth,
        'max-height': props.maxHeight,
        'min-width': props.minWidth,
        'min-height': props.minHeight
      }
    }, slots.default?.())
  }
})
</script>

<template>

</template>

<style>

</style>