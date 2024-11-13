<script setup>
import {getCurrentInstance, useSlots, h, ref} from 'vue'

const vm = getCurrentInstance()
const slots = useSlots()

const hovered = ref(false)

const props = defineProps({
  tag: {type: String, default: 'button'},
  textColor: {type: String, default: 'white'},
  color: {type: String, default: '#1f9deb'},
  width: {type: String, default: '72px'},
  height: {type: String, default: '40px'},
  radius: {type: String, default: '4px'},
  hoverClass: {type: String, default: 'elevation-4'},
  leaveClass: {type: String, default: 'elevation-2'},
})

vm.render = () => h(props.tag || 'button', {
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