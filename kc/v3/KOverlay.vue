<script>
import {
  ref,
  computed,
  onMounted,
  defineEmits,
  defineComponent,
  onUnmounted,
  useSlots,
  h,
  nextTick,
  watch,
  Transition,
  Teleport
} from "vue";
import {unitgen} from "../tools.js";

export default defineComponent({
  name: 'KOverlay',
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
  watch: {
    model: {
      immediate: true,
      handler(n, o) {
        if (n && this.closeOnPressEsc) {
          this.$nextTick(() => {
            this.$refs.el.focus()
            this.$refs.el.addEventListener('keyup', () => {
              this.$emit('update:model', false)
            })
          })
        }
      }
    }
  },
  setup(props) {
    const slots = useSlots()

    const rootStyle = ref({
      height: 0,
      heightPriority: '',
      overflow: '',
      overflowPriority: ''
    })

    const styles = computed(() => ({
      width: unitgen(props.width),
      height: unitgen(props.height),
      minWidth: unitgen(props.minWidth),
      maxWidth: unitgen(props.maxWidth),
      minHeight: unitgen(props.minHeight),
      maxHeight: unitgen(props.maxHeight),
      overflow: props.overflow,
      'background-color': props.color,
      position: props.position,
      top: unitgen(props.top),
      left: unitgen(props.left),
      right: unitgen(props.right),
      bottom: unitgen(props.bottom),
      'z-index': props.zIndex
    }))

    function initComponent() {
      if (props.preventOverflow) {
        const rootElement = document.querySelector('html');
        rootStyle.value.height = rootElement.style.height
        rootStyle.value.heightPriority = rootElement.style.getPropertyPriority('height')
        rootStyle.value.overflow = rootElement.style.overflow
        rootStyle.value.overflowPriority = rootElement.style.getPropertyPriority('overflow')
        rootElement.style.height = '100vh'
        rootElement.style.overflow = 'auto'
      }
    }

    function exitComponent() {
      if (props.preventOverflow) {
        const rootElement = document.querySelector('html');
        rootElement.style.setProperty('height', rootStyle.value.overflow, rootStyle.value.overflowPriority)
        rootElement.style.setProperty('overflow', rootStyle.value.height, rootStyle.value.heightPriority)
      }
    }

    onMounted(() => {
      initComponent()
    })

    onUnmounted(() => {
      exitComponent()
    })
    return () => h(Transition, {name: props.transition},
        () => [props.model
            ? h(Teleport, {to: props.attachTo},
                h(props.tag || 'div', {class: 'k-overlay', style: styles.value, tabindex: '-1', ref: 'el'},
                    slots.default?.()))
            : null])
  }
})
</script>

<template>

</template>

<style>

</style>