<template>
  <div @wheel="wheel" :style="style" class="k-overlay">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KOverlay",
  props: {
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
    preventWheel: {type: Boolean, default: false},
    preventOverflow: {type: Boolean, default: false},
  },
  computed: {
    style() {
      return `--color: ${this.color};
              --position: ${this.position};
              --width: ${this.width};
              --height: ${this.height};
              --min-width: ${this.minWidth};
              --min-height: ${this.minHeight};
              --max-width: ${this.maxWidth};
              --max-height: ${this.maxHeight};
              --top: ${this.top};
              --left: ${this.left};
              --bottom: ${this.bottom};
              --right: ${this.right};
              --overflow: ${this.overflow};
              --z-index:${this.zIndex};`
    }
  },
  methods: {
    wheel(e) {
      if (this.preventWheel) {
        e.preventDefault();
      }
    }
  },
  mounted() {
    if (this.preventOverflow) {
      document.querySelector('html').style.overflow = 'hidden'
    }
  },
  destroyed() {
    if (this.preventOverflow) {
      document.querySelector('html').style.overflow = ''
    }
  }
}
</script>

<style>
.k-overlay {
  background-color: var(--color);
  position: var(--position);
  top: var(--top);
  left: var(--left);
  right: var(--right);
  bottom: var(--bottom);
  width: var(--width);
  height: var(--height);
  min-width: var(--min-width);
  min-height: var(--min-height);
  max-width: var(--max-width);
  max-height: var(--max-height);
  overflow: var(--overflow);
  z-index: var(--z-index);
}
</style>
