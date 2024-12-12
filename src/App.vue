<script setup lang="ts">
import { useCycleList } from './composables/useCycleList.ts';
const { state, prev, next } = useCycleList(['gato', 'pez', 'perro']);

</script>

<template>
<div>{{state}}</div>
    <button @click="next">previous</button>
    <button @click="prev">next</button>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
