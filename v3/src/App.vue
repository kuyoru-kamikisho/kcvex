<script setup lang="ts">
import {ref} from "vue";
import VExpandTransition from "@/VExpandTransition.vue";

const xss = ref([true, true])
</script>

<template>
  <div class="container">
    <button @click="xss[0]=!xss[0]">X测试</button>
    <button @click="xss[1]=!xss[1]">Y测试</button>
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