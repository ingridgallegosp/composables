<script setup lang="ts">
import { useCycleList } from './composables/useCycleList.ts';
import { ref } from 'vue';
const  goTo = ref(0);
const animals = ref(['gato', 'pez', 'perro', 'león']);
const { state, prev, next, go } = useCycleList(animals.value);
</script>

<template>
    <div>{{state}}</div>
    <button @click="next">previous</button>
    <button @click="prev">next</button>
    <input type="number" v-model="goTo" />
    <button @click="go(goTo)">Go To</button>

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
