<script setup>
    import { useSolarSystemStore } from "@/stores/solarSystemStore.js";
    const solarSystemStore = useSolarSystemStore();
</script>

<template>
    <div style="display: flex; gap: 25px; flex-wrap: wrap;">
        <div v-for="planet in solarSystemStore.planets">
            <img :src="planet.image" height="100">
            <RouterLink :to="`/solarsystem/${planet.name}`">
                <h2>{{ planet.name }}</h2>
            </RouterLink>
        </div>
    </div>
</template>