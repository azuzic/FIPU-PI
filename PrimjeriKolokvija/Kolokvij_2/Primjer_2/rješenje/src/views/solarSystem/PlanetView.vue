<script setup>
    import { useRouter } from 'vue-router'
    import { useSolarSystemStore } from "@/stores/solarSystemStore.js";

    const router = useRouter()
    const solarSystemStore = useSolarSystemStore();

    const planet = solarSystemStore.getPlanet(router.currentRoute.value.params.planet);
</script>

<template>
    <div>        
        <u @click="$router.go(-1)" style="cursor: pointer;">
            Back
        </u>     
        <h2> {{ planet.name }} </h2>
        <img :src="planet.image" height="300">
        <p>
            {{ planet.description }}
        </p>
        <hr>
        <div v-if="planet.satellites.length > 0">
            <p><b>Satellites:</b></p>
            <div style="display: flex; gap: 25px; flex-wrap: wrap;">
                <div v-for="moon in planet.satellites">
                    <img :src="moon.image" height="150">                    
                    <RouterLink :to="`/solarsystem/${planet.name}/${moon.name}`">
                        <h3>{{ moon.name }}</h3>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-else>
            No satellites...
        </div>
    </div>
</template>