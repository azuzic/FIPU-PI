<script setup>
    import { useRouter } from 'vue-router'
    import { useSolarSystemStore } from "@/stores/solarSystemStore.js";

    const router = useRouter()
    const solarSystemStore = useSolarSystemStore();

    const moon = solarSystemStore.getMoon(
        router.currentRoute.value.params.planet,
        router.currentRoute.value.params.moon
    );
</script>

<template>
    <div>   
        <u @click="$router.go(-1)" style="cursor: pointer;">
            Back
        </u>     
        <h2> 
            {{ moon.name }}
        </h2>
        <img :src="moon.image" height="300">
        <p>
            {{ moon.description }}
        </p>
        <hr>
    </div>
</template>