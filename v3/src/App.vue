<script setup lang="ts">
import {onMounted, ref} from "vue";
import '../../kc/style.js'
import VExpandTransition from "../../kc/v3/KExpandTransition.vue";
import KOverlay from "../../kc/v3/KOverlay.vue";
import KBtn from '../../kc/v3/KBtn.vue'
import KSheet from '../../kc/v3/KSheet.vue'
import KDivider from '../../kc/v3/KDivider.vue'
import {genHash} from "@/utils";

let mark1 = 0
const xss = ref([true, true])
const ovl = ref(false)
const pse = ref(false)
const list = ref([])
const scr = ref(true)

function scrollEn() {
  pse.value = true
}

function scrollOt() {
  pse.value = false
}

onMounted(() => {
  mark1 = setInterval(() => {
    const len = list.value.length;
    if (len >= 30) {
      clearInterval(mark1)
      return
    }
    list.value.push({
      key: 'kcvex测试单元' + len,
      id: genHash(7)
    })
  }, 33)
})
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
          <k-sheet tag="ul" max-height="200px" overflow="auto" v-scroll v-if="xss[1]" class="box2 u-box inselectable">
            <k-sheet tag="li" v-for="i in list" :key="i.id" class="py-2 px-5 text-16">
              {{ i.key }}
            </k-sheet>
          </k-sheet>
        </v-expand-transition>
      </div>
    </div>
    <k-sheet height="320px" color="#d8cde187" class="d-flex">
      <k-sheet max-height="100%" overflow="auto" v-scroll="{factor:3}" color="#dbdbe0" class="flex-grow-1">
        <k-sheet tag="li" v-for="i in list" :key="i.id" class="py-2 px-5 text-16">
          {{ i.key }}较快
        </k-sheet>
      </k-sheet>
      <k-sheet max-height="100%" overflow="auto" v-scroll="{reverse:true}" color="#dbe0df" class="flex-grow-1">
        <k-sheet tag="li" v-for="i in list" :key="i.id" class="py-2 px-5 text-16">
          {{ i.key }}反向
        </k-sheet>
      </k-sheet>
      <k-sheet @mouseenter="scrollEn" @mouseleave="scrollOt" max-height="100%" overflow="auto" v-scroll="{pause:pse}"
               color="#e9d7e4" class="flex-grow-1">
        <k-sheet tag="li" v-for="i in list" :key="i.id" class="py-2 px-5 text-16">
          {{ i.key }}移动暂停+无限+请悬浮
        </k-sheet>
      </k-sheet>
      <k-sheet max-height="100%" overflow="auto" v-scroll="{factor:0.2}" color="#e9dfd7" class="flex-grow-1">
        <k-sheet tag="li" v-for="i in list" :key="i.id" class="py-2 px-5 text-16">
          {{ i.key }} 超慢
        </k-sheet>
      </k-sheet>
    </k-sheet>
    <k-sheet @mouseenter="scrollEn" @mouseleave="scrollOt" v-scroll="{direction:'x',pause:pse}" overflow="auto"
             class="d-flex flex-nowrap">
      <k-sheet v-for="i in list" :key="i.id" class="py-2 px-5 mx-1 text-16 d-inline-block">
        {{ i.key }} 横向联动暂停
      </k-sheet>
    </k-sheet>
    <k-sheet v-scroll="{direction:'x',reverse:true}" overflow="auto" class="d-flex flex-nowrap">
      <k-sheet v-for="i in list" :key="i.id" class="py-2 px-5 mx-1 text-16 d-inline-block">
        {{ i.key }} x反向
      </k-sheet>
    </k-sheet>
    <k-sheet color="blue" height="14px" class="mb-12"></k-sheet>
    <div class="d-flex">
      <k-btn @click.native="scr=!scr" class="mr-10">切换模式</k-btn>
      <transition name="slide-x-reverse" mode="out-in">
        <k-sheet v-if="scr" width="40px" height="40px" color="blue" key="1"></k-sheet>
        <k-sheet v-else width="40px" height="40px" color="red" key="2"></k-sheet>
      </transition>
      <k-sheet width="40px"></k-sheet>
      <transition name="slide-y-reverse" mode="out-in">
        <k-sheet v-if="scr" width="40px" height="40px" color="blue" key="1"></k-sheet>
        <k-sheet v-else width="40px" height="40px" color="red" key="2"></k-sheet>
      </transition>
    </div>
  </div>
</template>

<style>
.container {
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.15);
  padding-bottom: 100px;
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
  background-color: rgba(0, 0, 0, 0.46);
}
</style>