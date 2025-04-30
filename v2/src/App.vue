<script setup lang="ts">
import '../../kc/style.js'
import VExpandTransition from "../../kc/v2/KExpandTransition.vue";
// @ts-ignore
import KOverlay from "../../kc/v2/KOverlay.vue";
// @ts-ignore
import KDivider from "../../kc/v2/KDivider.vue";
// @ts-ignore
import KSheet from "../../kc/v2/KSheet.vue";
// @ts-ignore
import KBtn from "../../kc/v2/KBtn.vue";
// @ts-ignore
import KProgressCircular from "../../kc/v2/KProgressCircular.vue";
import {ref} from "vue";

const fox = ref(true)
const foy = ref(true)
const ovl = ref(false)
const pse = ref(false)
const scr = ref(true)
const pgc = ref(20)

function pse0() {
  pse.value = false
}

function pse1() {
  pse.value = true
}

</script>

<template>
  <div class="box inselectable flex-wrap">
    <k-divider width="200px" class="position-absolute"></k-divider>
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
    <button class="position-relative" v-ripple @click="ovl=true">打开遮罩+Ripple</button>
    <!--      <k-sheet color="black" height="2000px">滚动专用</k-sheet>-->
    <k-overlay :model="ovl" bottom="" min-height="100%" position="absolute">
      <k-sheet color="gray" width="92px" height="80px" class="d-flex round-4 align-ct justify-ct mx-auto mt-10">
        <k-btn @click.native="ovl=false">关闭遮罩</k-btn>
      </k-sheet>
    </k-overlay>
    <k-sheet tag="ul" color="rgba(0,0,0,.2)" class="ripple-test-box">
      <k-sheet tag="li" class="py-2">指令测试(无)</k-sheet>
      <k-sheet @mouseenter.native="pse1"
               @mouseleave.native="pse0"
               v-scroll="{pause:pse,factor:0.3}"
               height="400px"
               overflow="auto">
        <k-sheet color="rgba(0,0,0,.4)"
                 v-ripple
                 tag="li"
                 v-for="i in 100"
                 :key="i"
                 class="my-1 box-sizing-border py-2 px-5 position-relative c-pointer">
          指令测试 {{ i }}
        </k-sheet>
      </k-sheet>
    </k-sheet>
    <k-divider width="100%" height="2px"></k-divider>
    <div class="d-flex">
      <k-btn @click.native="scr=!scr" class="mr-10">切换模式</k-btn>
      <transition name="scroll-x-reverse" mode="out-in">
        <k-sheet v-if="scr" width="40px" height="40px" color="blue" key="1"></k-sheet>
        <k-sheet v-else width="40px" height="40px" color="red" key="2"></k-sheet>
      </transition>
      <k-sheet width="40px"></k-sheet>
      <transition name="scroll-y-reverse" mode="out-in">
        <k-sheet v-if="scr" width="40px" height="40px" color="blue" key="1"></k-sheet>
        <k-sheet v-else width="40px" height="40px" color="red" key="2"></k-sheet>
      </transition>

      <div class="px-6">
        <label for="pgc">
          进度百分比：
          <input id="pgc" type="text" v-model="pgc" class="py-2 px-3">
        </label>
        <k-progress-circular :value="pgc"></k-progress-circular>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  display: flex;
  justify-content: space-between;
  margin: 40px 120px;
}

li {
  list-style: none;
}

.ripple-test-box {
  transform: translate(-100px) scale(.6);
  --ripple-opacity: .4;
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