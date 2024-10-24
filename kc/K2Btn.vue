<script>
export default {
  name: "KBtn",
  data: () => ({
    hovered: false
  }),
  props: {
    tag: {type: String, default: 'button'},
    textColor: {type: String, default: 'white'},
    color: {type: String, default: '#1f9deb'},
    width: {type: String, default: '72px'},
    height: {type: String, default: '40px'},
    radius: {type: String, default: '4px'},
    hoverClass: {type: String, default: 'elevation-4'},
    leaveClass: {type: String, default: 'elevation-2'},
  },
  computed: {
    style() {
      return `background-color: ${this.color};
              width:${this.width};
              height:${this.height};
              color:${this.textColor};
              border-radius:${this.radius};`
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
