<template>
  <div class="k-divider" :style="style"></div>
</template>

<script>
export default {
  name: "KDivider",
  props: {
    color: {type: String, default: 'rgb(29,129,244)'},
    width: {type: String, default: '100%'},
    height: {type: String, default: '2px'},
    margin: {type: String, default: '0 0 0 0'}
  },
  computed: {
    style() {
      return `background-color: ${this.color};
              width:${this.width};
              height:${this.height};
              margin:${this.margin};`
    }
  }
}
</script>

<style>

</style>
