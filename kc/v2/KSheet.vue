<script>
import {unitgen} from "../tools.js";

export default {
  name: "KSheet",
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
  computed: {
    style() {
      return `background-color: ${this.color};
              width:${unitgen(this.width)};
              height:${unitgen(this.height)};
              overflow:${this.overflow};
              max-width:${unitgen(this.maxWidth)};
              max-height:${unitgen(this.maxHeight)};
              min-width:${unitgen(this.minWidth)};
              min-height:${unitgen(this.minHeight)};`
    }
  },
  render(h) {
    return h(this.tag || 'div', {
      class: 'k-sheet',
      style: this.style,
    }, this.$slots.default)
  }
}
</script>

<style>

</style>
