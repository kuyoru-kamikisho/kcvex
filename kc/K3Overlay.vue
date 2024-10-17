<script>
export default {
  name: 'KOverlay',
  props: {
    attachTo: {type: String, default: 'body'},
    transition: {type: String, default: 'kfade'},
    model: {type: Boolean, default: true},
    width: {type: String, default: ''},
    height: {type: String, default: ''},
    maxWidth: {type: String, default: ''},
    maxHeight: {type: String, default: ''},
    minWidth: {type: String, default: ''},
    minHeight: {type: String, default: ''},
    overflow: {type: String, default: ''},
    color: {type: String, default: 'rgba(0,0,0,.32)'},
    position: {type: String, default: 'fixed'},
    top: {type: String, default: '0'},
    left: {type: String, default: '0'},
    bottom: {type: String, default: '0'},
    right: {type: String, default: '0'},
    zIndex: {type: String, default: '2024'},
    preventOverflow: {type: Boolean, default: false},
  },
  data: () => ({
    rootStyle: {
      height: 0,
      heightPriority: '',
      overflow: '',
      overflowPriority: ''
    }
  }),
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        minHeight: this.minHeight,
        overflow: this.overflow,
        'background-color': this.color,
        position: this.position,
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom,
        'z-index': this.zIndex
      }
    }
  },
  mounted() {
    if (this.preventOverflow) {
      const rootElement = document.querySelector('html');
      this.rootStyle.height = rootElement.style.height
      this.rootStyle.heightPriority = rootElement.style.getPropertyPriority('height')
      this.rootStyle.overflow = rootElement.style.overflow
      this.rootStyle.overflowPriority = rootElement.style.getPropertyPriority('overflow')
      rootElement.style.height = '100vh'
      rootElement.style.overflow = 'auto'
    }
  },
  destroyed() {
    if (this.preventOverflow) {
      const rootElement = document.querySelector('html');
      rootElement.style.setProperty('height', this.rootStyle.overflow, this.rootStyle.overflowPriority)
      rootElement.style.setProperty('overflow', this.rootStyle.height, this.rootStyle.heightPriority)
    }
  },
}
</script>
<template>
  <transition :name="transition">
    <teleport v-if="model" :to="attachTo">
      <div class="k-overlay" :style="styles">
        <slot></slot>
      </div>
    </teleport>
  </transition>
</template>
<style>

</style>