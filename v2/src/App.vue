<script setup lang="ts">
import VExpandTransition from "../../kc/K2ExpandTransition.vue";
// @ts-ignore
import KStyle from "../../kc/KStyle.vue";
// @ts-ignore
import KOverlay from "../../kc/KOverlay.vue";
// @ts-ignore
import KSheet from "../../kc/KSheet.vue";
// @ts-ignore
import KBtn from "../../kc/KBtn.vue";
import {ref} from "vue";

const fox = ref(true)
const foy = ref(true)
const ovl = ref(false)
</script>

<template>
  <div class="box">
    <div>
      <button @click="fox=!fox">x方向</button>
      <button @click="foy=!foy">y方向</button>
      <v-expand-transition direction="x">
        <div style="transition: color .2s ease" v-if="fox" class="fox"></div>
      </v-expand-transition>
      <v-expand-transition>
        <div style="transition: color .2s ease" v-if="foy" class="foy"></div>
      </v-expand-transition>
    </div>
    <div>
      <button @click="fox=!fox">x方向-mode测试</button>
      <v-expand-transition>
        <div class="fox" v-if="fox"></div>
        <div class="fox orange" v-else></div>
      </v-expand-transition>
    </div>
    <k-style>
      <button @click="ovl=true">打开遮罩</button>
      <transition name="kfade">
        <k-overlay v-if="ovl">
          <k-sheet width="92px" height="80px" class="d-flex align-ct justify-ct mx-auto mt-10">
            <k-btn @click.native="ovl=false">关闭遮罩</k-btn>
          </k-sheet>
        </k-overlay>
      </transition>
    </k-style>
  </div>
</template>

<style>
.box {
  display: flex;
  justify-content: space-between;
  margin: 40px 120px;
}

button {
  padding: 8px 12px;
}

.fox,
.foy {
  width: 200px;
  height: 200px;
}

.fox {
  background-color: #c82061;
}

.fox.orange {
  background-color: orange;
}

.foy {
  background-color: #2fc12f;
}
</style>