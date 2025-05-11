<script setup>
import { useCounterStore } from "@/stores/counterStore.js"
const counterStore = useCounterStore();
</script>

<template>
  <div>
    Count: {{ counterStore.count }}
    <button @click="counterStore.increment()">Increment</button>
    <br>
    
    DoubleCount: {{ counterStore.doubleCount }}
  </div>
</template>

<style scoped>

</style>
