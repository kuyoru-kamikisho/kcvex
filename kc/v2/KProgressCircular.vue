<script>
import {unitgen} from "../tools.js";

export default {
  name: "KProgressCircular",
  props: {
    tag: {type: String, default: 'div'},
    color: {type: String, default: "red"},
    indeterminate: {type: Boolean, default: false},
    rotate: {type: [Number, String], default: 0},
    size: {type: [Number, String], default: 32},
    value: {type: [Number, String], default: 0},
    width: {type: [Number, String], default: 4},
  },
  data: () => ({
    radius: 20,
  }),
  computed: {
    normalizedValue() {
      if (this.value < 0)
        return 0
      if (this.value > 100)
        return 100
      return parseInt(this.value)
    },
    circumference() {
      return 2 * Math.PI * this.radius
    },
    strokeDashArray() {
      return Math.round(this.circumference * 1000) / 1000
    },
    strokeDashOffset() {
      return ((100 - this.normalizedValue) / 100) * this.circumference + 'px'
    },
    svgStyles() {
      return {
        transform: `rotate(${parseInt(this.rotate)}deg)`,
      }
    },
    viewBoxSize() {
      return this.radius / (1 - parseInt(this.width) / parseInt(this.size))
    },
  },
  methods: {
    genCircle(name, offset) {
      return this.$createElement('circle', {
        class: `k-progress-circular__${name}`,
        attrs: {
          fill: 'transparent',
          cx: 2 * this.viewBoxSize,
          cy: 2 * this.viewBoxSize,
          r: this.radius,
          'stroke-width': unitgen(parseInt(this.width) / parseInt(this.size) * this.viewBoxSize * 2),
          'stroke-dasharray': this.strokeDashArray,
          'stroke-dashoffset': offset,
        },
      })
    },
    genSvg() {
      const children = [
        this.indeterminate || this.genCircle('underlay', 0),
        this.genCircle('overlay', this.strokeDashOffset),
      ]

      return this.$createElement('svg', {
        style: this.svgStyles,
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: `${this.viewBoxSize} ${this.viewBoxSize} ${2 * this.viewBoxSize} ${2 * this.viewBoxSize}`,
        },
      }, children)
    },
    genInfo() {
      return this.$createElement(this.tag, {
        staticClass: 'k-progress-circular__info',
      }, this.$slots.default)
    },
  },
  render(h) {
    return h(this.tag || 'div', {
      staticClass: 'k-progress-circular',
      class: {
        'k-progress-circular--indeterminate': this.indeterminate,
      },
      style: {
        width: unitgen(this.size),
        height: unitgen(this.size),
        color: this.color,
        caretColor: this.color,
      },
      on: this.$listeners
    }, [
      this.genSvg(),
      this.genInfo(),
    ])
  }
}
</script>

<style scoped>
.k-progress-circular {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.k-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.k-progress-circular__underlay {
  stroke: hsla(0, 0%, 62%, .4);
  z-index: 1;
}

.k-progress-circular__overlay {
  stroke: currentColor;
  z-index: 2;
  transition: all .6s ease-in-out;
}

.k-progress-circular__info {
  align-items: center;
  display: flex;
  justify-content: center;
}

.k-progress-circular--indeterminate > svg {
  animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all .2s ease-in-out;
}

.k-progress-circular--indeterminate .k-progress-circular__overlay {
  animation: progress-circular-dash 1.4s ease-in-out infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0;
}

@keyframes progress-circular-rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}
</style>