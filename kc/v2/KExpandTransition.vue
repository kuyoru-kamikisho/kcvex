<script>
import {upperFirst} from "../tools.js"

export default {
  name: 'KExpandTransition',
  props: {
    direction: {type: String, default: "y"},
    mode: {type: String, default: "out-in"}
  },
  computed: {
    willSizeProperty() {
      return this.direction === 'x' ? 'width' : 'height'
    },
    willOffsetProperty() {
      return `offset${upperFirst(this.willSizeProperty)}`
    },
    transitionClass() {
      return `expand-${this.direction}-transition`
    }
  },
  methods: {
    beforeEnter(el) {
      el._parent = el.parentNode
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [this.willSizeProperty]: el.style[this.willSizeProperty],
      }
    },

    enter(el) {
      const initialStyle = el._initialStyle

      el.style.setProperty('transition', 'none', 'important')
      // Hide overflow to account for collapsed margins in the calculated height
      el.style.overflow = 'hidden'
      const offset = `${el[this.willOffsetProperty]}px`

      el.style[this.willSizeProperty] = '0'

      void el.offsetHeight // force reflow

      el.style.transition = initialStyle.transition
      el.classList.add(this.transitionClass)
      requestAnimationFrame(() => {
        el.style[this.willSizeProperty] = offset
      })
    },

    leave(el) {
      el._initialStyle = {
        transition: '',
        overflow: el.style.overflow,
        [this.willSizeProperty]: el.style[this.willSizeProperty],
      }

      el.style.overflow = 'hidden'
      el.style[this.willSizeProperty] = `${el[this.willOffsetProperty]}px`
      void el.offsetHeight // force reflow

      el.classList.add(this.transitionClass)
      requestAnimationFrame(() => (el.style[this.willSizeProperty] = '0'))
    },

    afterLeave(el) {
      this.resetStyles(el)
    },

    resetStyles(el) {
      const size = el._initialStyle[this.willSizeProperty]
      el.style.overflow = el._initialStyle.overflow
      if (size != null) el.style[this.willSizeProperty] = size
      el.classList.remove(this.transitionClass)
      delete el._initialStyle
    },
  }
}
</script>

<template>
  <transition v-bind:mode="mode"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:after-enter="resetStyles"
              v-on:enter-cancelled="resetStyles"
              v-on:leave="leave"
              v-on:after-leave="afterLeave"
              v-on:leave-cancelled="afterLeave">
    <slot></slot>
  </transition>
</template>
<style>
.expand-x-transition {
  transition: width 282ms cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.expand-y-transition {
  transition: height 282ms cubic-bezier(0.4, 0, 0.2, 1) !important;
}
</style>
