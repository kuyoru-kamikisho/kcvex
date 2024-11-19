<script>
import {camelize, defineComponent, Transition, h, useSlots} from 'vue'

export default defineComponent({
  props: {
    direction: {type: String, default: 'y'},
    mode: {type: String, default: "out-in"}
  },
  setup(props) {
    const slots = useSlots()

    const transitionClass = `expand-${props.direction}-transition`
    const sizeProperty = props.direction === 'x' ? 'width' : 'height'
    const offsetProperty = camelize(`offset-${sizeProperty}`)

    function onBeforeEnter(el) {
      el._parent = el.parentNode
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty],
      }
    }

    function onEnter(el) {
      const initialStyle = el._initialStyle

      el.style.setProperty('transition', 'none', 'important')
      // Hide overflow to account for collapsed margins in the calculated height
      el.style.overflow = 'hidden'
      const offset = `${el[offsetProperty]}px`

      el.style[sizeProperty] = '0'

      void el.offsetHeight // force reflow

      el.style.transition = initialStyle.transition

      el.classList.add(transitionClass)
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset
      })
    }

    function onLeave(el) {
      el._initialStyle = {
        transition: '',
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty],
      }

      el.style.overflow = 'hidden'
      el.style[sizeProperty] = `${el[offsetProperty]}px`
      void el.offsetHeight // force reflow
      el.classList.add(transitionClass)
      requestAnimationFrame(() => (el.style[sizeProperty] = '0'))
    }

    function onAfterLeave(el) {
      resetStyles(el)
    }

    function resetStyles(el) {
      const size = el._initialStyle[sizeProperty]
      el.style.overflow = el._initialStyle.overflow
      if (size != null) el.style[sizeProperty] = size
      el.classList.remove(transitionClass)
      delete el._initialStyle
    }

    return () => h(Transition, {
      mode: props.mode,
      onBeforeEnter,
      onEnter,
      onAfterEnter: resetStyles,
      onEnterCancelled: resetStyles,
      onLeave,
      onAfterLeave,
      onLeaveCancelled: onAfterLeave
    }, () => slots.default?.())
  }
})
</script>

<template>

</template>

<style>
.expand-x-transition {
  transition: width 282ms cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.expand-y-transition {
  transition: height 282ms cubic-bezier(0.4, 0, 0.2, 1) !important;
}
</style>