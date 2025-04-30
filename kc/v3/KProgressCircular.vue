<script>
import {unitgen} from "../tools.js";
import {useSlots, h, computed, defineComponent} from 'vue'

export default defineComponent({
  name: "KProgressCircular",
  props: {
    tag: {type: String, default: 'div'},
    color: {type: String, default: "currentColor"},
    indeterminate: {type: Boolean, default: false},
    rotate: {type: [Number, String], default: 0},
    size: {type: [Number, String], default: 32},
    value: {type: [Number, String], default: 0},
    width: {type: [Number, String], default: 4},
  },
  setup(props) {
    const RADIUS = 20
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS
    const STROKEDASHARRAY = Math.round(CIRCUMFERENCE * 1000) / 1000

    const slots = useSlots()

    const normalizedValue = computed(() => {
      if (props.value < 0)
        return 0
      if (props.value > 100)
        return 100
      return parseInt(props.value)
    })

    const strokeDashOffset = computed(() => ((100 - normalizedValue.value) / 100) * CIRCUMFERENCE + 'px')
    const viewBoxSize = computed(() => RADIUS / (1 - parseInt(props.width) / parseInt(props.size)))

    function genCircle(name, offset) {
      return h('circle', {
        class: `k-progress-circular__${name}`,
        fill: 'transparent',
        cx: 2 * viewBoxSize.value,
        cy: 2 * viewBoxSize.value,
        r: RADIUS,
        'stroke-width': unitgen(parseInt(props.width) / parseInt(props.size) * viewBoxSize.value * 2),
        'stroke-dasharray': STROKEDASHARRAY,
        'stroke-dashoffset': offset,
      })
    }

    function genSvg() {
      const children = [
        props.indeterminate || genCircle('underlay', 0),
        genCircle('overlay', strokeDashOffset.value),
      ]

      return h('svg', {
        style: {
          transform: `rotate(${parseInt(props.rotate)}deg)`,
        },
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: `${viewBoxSize.value} ${viewBoxSize.value} ${2 * viewBoxSize.value} ${2 * viewBoxSize.value}`,
      }, children)
    }

    function genInfo() {
      return h(props.tag, {
        class: 'k-progress-circular__info',
      }, slots.default?.())
    }

    return () => h(props.tag || 'div', {
      class: {
        'k-progress-circular': true,
        'k-progress-circular--indeterminate': props.indeterminate,
      },
      style: {
        width: unitgen(props.size),
        height: unitgen(props.size),
        color: props.color,
        caretColor: props.color,
      }
    }, [
      genSvg(),
      genInfo()
    ])
  }
})
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