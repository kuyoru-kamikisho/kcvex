<script>
import {unitgen} from "../tools.js";

export default {
  name: "KDivider",
  props: {
    tag: {type: String, default: 'div'},
    color: {type: String, default: 'rgb(29,129,244)'},
    width: {type: String, default: '100%'},
    height: {type: String, default: '2'},
    margin: {type: String, default: '0 0 0 0'}
  },
  computed: {
    style() {
      return `background-color: ${this.color};
              width:${unitgen(this.width)};
              height:${unitgen(this.height)};
              margin:${this.margin};`
    }
  },
  render(h) {
    return h(this.tag || 'div', {
      class: 'k-divider',
      style: this.style,
    })
  }
}
</script>

<style>

</style>
