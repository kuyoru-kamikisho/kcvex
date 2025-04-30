<script>
import {unitgen} from "../tools.js";

export default {
  name: "KBtn",
  data: () => ({
    hovered: false
  }),
  props: {
    tag: {type: String, default: 'button'},
    textColor: {type: String, default: 'white'},
    color: {type: String, default: '#1f9deb'},
    width: {type: String, default: '72'},
    height: {type: String, default: '40'},
    radius: {type: String, default: '4'},
    hoverClass: {type: String, default: ''},
    leaveClass: {type: String, default: ''},
  },
  computed: {
    style() {
      return `background-color: ${this.color};
              width:${unitgen(this.width)};
              height:${unitgen(this.height)};
              color:${this.textColor};
              border-radius:${unitgen(this.radius)};`
    }
  },
  render(h) {
    return h(this.tag || 'button', {
      class: ['k-btn', this.hovered ? this.hoverClass : this.leaveClass],
      style: this.style,
      on: {
        mouseenter: () => {
          this.hovered = true
        },
        mouseleave: () => {
          this.hovered = false
        },
        ...this.$listeners
      },
    }, this.$slots.default);
  }
}
</script>

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
