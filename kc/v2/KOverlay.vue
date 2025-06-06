<script>
import {unitgen} from "../tools.js";

export default {
  name: "KOverlay",
  emits: ['update:model'],
  props: {
    tag: {type: String, default: 'div'},
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
    closeOnPressEsc: {type: Boolean, default: true},
  },
  data: () => ({
    rootStyle: {
      height: 0,
      heightPriority: '',
      overflow: '',
      overflowPriority: ''
    }
  }),
  watch: {
    model: {
      immediate: true,
      handler(n, o) {
        if (n && this.closeOnPressEsc) {
          this.$nextTick(() => {
            this.$el.focus()
            this.$el.addEventListener('keyup', () => {
              this.$emit('update:model', false)
            })
          })
        }
      }
    }
  },
  methods: {
    attachEl() {
      if (!this.attachTo) return
      const targetDom = document.querySelector(this.attachTo)
      if (targetDom === null) {
        console.warn(`Can't find target Dom: ${this.attachTo}`)
      } else {
        targetDom.appendChild(this.$el)
      }
    },
    overflowReset() {
      if (this.preventOverflow) {
        const rootElement = document.querySelector('html');
        rootElement.style.setProperty('height', this.rootStyle.overflow, this.rootStyle.overflowPriority)
        rootElement.style.setProperty('overflow', this.rootStyle.height, this.rootStyle.heightPriority)
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
    this.attachEl()
  },
  destroyed() {
    if (this.$el) this.$el.remove()
    this.overflowReset()
  },
  beforeRouteLeave(to, from, next) {
    this.overflowReset()
    this.$destroy()
    if (next) next()
  },
  render(h) {
    return this.model && h('transition', {
      attrs: {
        name: this.transition,
      }
    }, [h(this.tag || 'div', {
      staticClass: 'k-overlay',
      attrs: {
        tabindex: '-1',
      },
      style: {
        width: unitgen(this.width),
        height: unitgen(this.height),
        minWidth: unitgen(this.minWidth),
        maxWidth: unitgen(this.maxWidth),
        minHeight: unitgen(this.minHeight),
        maxHeight: unitgen(this.maxHeight),
        overflow: this.overflow,
        'background-color': this.color,
        position: this.position,
        top: unitgen(this.top),
        left: unitgen(this.left),
        right: unitgen(this.right),
        bottom: unitgen(this.bottom),
        'z-index': this.zIndex
      },
      on: this.$listeners
    }, this.$slots.default)])
  }
}
</script>

<style>

</style>