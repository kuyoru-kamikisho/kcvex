<script>
import {
  ref,
  computed,
  onMounted,
  defineComponent,
  onUnmounted,
  useSlots,
  h,
  Transition,
  Teleport
} from "vue";

export default defineComponent({
  name: 'KOverlay',
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
      width: props.width,
      height: props.height,
      minWidth: props.minWidth,
      maxWidth: props.maxWidth,
      maxHeight: props.maxHeight,
      minHeight: props.minHeight,
      overflow: props.overflow,
      'background-color': props.color,
      position: props.position,
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
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
                h(props.tag || 'div', {class: 'k-overlay', style: styles.value},
                    slots.default?.()))
            : null])
  }
})
</script>

<template>

</template>

<style>

</style>