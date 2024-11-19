<script setup lang="ts">
import {ref} from "vue";
import '../../kc/style.js'
import VExpandTransition from "../../kc/v3/KExpandTransition.vue";
import KOverlay from "../../kc/v3/KOverlay.vue";
import KBtn from '../../kc/v3/KBtn.vue'
import KSheet from '../../kc/v3/KSheet.vue'
import KDivider from '../../kc/v3/KDivider.vue'

const xss = ref([true, true])
const ovl = ref(false)
</script>

<template>
  <div class="container">
    <k-divider color="red" height="4px"></k-divider>
    <button @click="xss[0]=!xss[0]">X测试</button>
    <button @click="xss[1]=!xss[1]">Y测试</button>
    <k-btn height="24px" @click="ovl=true" v-ripple class="position-relative pa-4">遮罩测试</k-btn>
    <k-overlay :model="ovl">
      <button @click="ovl=false">关闭遮罩</button>
    </k-overlay>
    <div class="test-box">
      <div class="test-unit unit1">
        <v-expand-transition direction="x">
          <div v-ripple v-if="xss[0]" class="box1 u-box position-relative">
            X收缩+Ripple效果
          </div>
        </v-expand-transition>
      </div>
      <div class="test-unit unit2">
        <v-expand-transition>
          <div v-if="xss[1]" class="box2 u-box">
            Y收缩
          </div>
        </v-expand-transition>
      </div>
    </div>
    <k-sheet color="blue" height="14px"></k-sheet>
  </div>
</template>

<style>
.container {
  width: 50vw;
  height: 50vh;
  margin: 15vh auto;
  background-color: rgba(0, 0, 0, 0.15);
}

.test-box {
  height: 93%;
  display: flex;
  justify-content: space-between;
}

.test-unit {
  flex-grow: 1;
  max-width: 50%;
  height: 100%;
  border: 1px solid rgba(44, 43, 52, 0.39);
}

.u-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.46);
}
</style>