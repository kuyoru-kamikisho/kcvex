<script setup lang="ts">
import {ref} from "vue";
import VExpandTransition from "../../kc/K3ExpandTransition.vue";
import KOverlay from "../../kc/K3Overlay.vue";
import KBtn from '../../kc/K3Btn.vue'
import KSheet from '../../kc/K3Sheet.vue'
import KDivider from '../../kc/K3Divider.vue'
import KStyle from "../../kc/KStyle.vue";

const xss = ref([true, true])
const ovl = ref(false)
</script>

<template>
  <k-style class="container">
    <k-divider height="4px"></k-divider>
    <button @click="xss[0]=!xss[0]">X测试</button>
    <button @click="xss[1]=!xss[1]">Y测试</button>
    <k-btn height="24px" @click="ovl=true">遮罩测试</k-btn>
    <k-overlay :model="ovl">
      <button @click="ovl=false">关闭遮罩</button>
    </k-overlay>
    <div class="test-box">
      <div class="test-unit unit1">
        <v-expand-transition direction="x">
          <div v-if="xss[0]" class="box1 u-box">
            X收缩
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
    <k-sheet color="blue" height="12px"></k-sheet>
  </k-style>
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