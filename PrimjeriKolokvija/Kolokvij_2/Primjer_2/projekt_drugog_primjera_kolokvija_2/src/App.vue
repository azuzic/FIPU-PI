<script setup>
    import { RouterView } from 'vue-router'
</script>

<template>
    <div>
        <h1 v-if="true">ZADATAK 1 - SolarSystem</h1>
        <h1 v-if="false">ZADATAK 2 - MaliDucan</h1>
        <br>
        <RouterView/>
    </div>
</template>

<style scoped>

</style>