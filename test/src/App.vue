<script setup lang="ts">
import 'kcvex/style'
import {KSheet} from 'kcvex/v2'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <header>
      <k-sheet color="blue" width="100px" height="40px" class="pa-10">测试</k-sheet>
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
