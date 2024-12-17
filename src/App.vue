<script setup lang="ts">
import { useCycleList } from './composables/useCycleList.ts';
import { ref } from 'vue';
const  goTo = ref(0);
const animals = ref(['gato', 'pez', 'perro', 'león']);
const {prev, next, go, state } = useCycleList(animals.value);
</script>

<template>
    <div>{{state}}</div>
    <button @click="next">previous</button>
    <button @click="prev">next</button>
    <input type="number" v-model="goTo" />
    <button @click="go(goTo)">Go To</button>

</template>

<style scoped>

</style>
