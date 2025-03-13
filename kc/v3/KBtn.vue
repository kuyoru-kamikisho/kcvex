<script>
import {useSlots, h, ref, defineComponent} from 'vue'

export default defineComponent({
  props: {
    tag: {type: String, default: 'button'},
    textColor: {type: String, default: 'white'},
    color: {type: String, default: '#1f9deb'},
    width: {type: String, default: '72px'},
    height: {type: String, default: '40px'},
    radius: {type: String, default: '4px'},
    hoverClass: {type: String, default: ''},
    leaveClass: {type: String, default: ''},
  },
  setup(props) {
    const slots = useSlots()

    const hovered = ref(false)

    return () => h(props.tag || 'button', {
      class: ['k-btn', hovered.value ? props.hoverClass : props.leaveClass],
      style: {
        'background-color': props.color,
        width: props.width,
        height: props.height,
        color: props.textColor,
        'border-radius': props.radius,
      },
      onMouseenter() {
        hovered.value = true
      },
      onMouseleave() {
        hovered.value = false
      },
    }, slots.default?.())
  }
})
</script>

<template>

</template>

<style>
.k-btn {
  position: relative;
  cursor: pointer;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all .2s ease;
  outline: none;
  border-width: 0;
}
</style>