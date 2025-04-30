<script setup lang="ts">
// @ts-nocheck
import 'kcvex/style'
import {KSheet, KProgressCircular} from 'kcvex/v2'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <header>
      <k-sheet color="#80808029" class="pa-10">
        测试
        <k-progress-circular indeterminate color="red"></k-progress-circular>
        <k-progress-circular value="70" color="red">70</k-progress-circular>
      </k-sheet>
      <div class="wrapper">
        <HelloWorld msg="You did it!"/>
      </div>
    </header>
    <main>
      <TheWelcome/>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
