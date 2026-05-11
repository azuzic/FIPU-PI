<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import { useDucanStore } from "@/stores/ducanStore.js";
    const ducanStore = useDucanStore();
</script>

<template>
    <div>
        <h1 v-if="true">ZADATAK 1 - SolarSystem</h1>
        <h1 v-if="false">ZADATAK 2 - MaliDucan</h1>
        <div v-if="false" style="display: flex; gap: 8px;">
            <RouterLink to="/shop">
                Trgovina
            </RouterLink>
            |
            <RouterLink to="/admin">
                Admin
            </RouterLink>
            |
            <RouterLink to="/cart">
                Košarica
            </RouterLink> 
            | U košarici:
            <b>{{ ducanStore.cart.length }}</b>
        </div>
        <br>
        <RouterView/>
    </div>
</template>

<style scoped>
a.router-link-active {
    color: green;
    font-weight: bold;
}
</style>