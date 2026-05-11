import { computed } from 'vue'
import { defineStore } from 'pinia'
import solarSystemData from '@/data/solarSystemData'

export const useSolarSystemStore = defineStore('solarSystemStore', () => {

    const planets = computed(() => {
        return solarSystemData.planets
    })
    const getPlanet = ((planetName) => {
        const planet = planets.value.find(p => p.name == planetName)
        return planet
    })
    const getMoon = ((planetName, moonName) => {
        const planet = getPlanet(planetName);
        const moon = planet.satellites.find(m => m.name == moonName)
        return moon
    })

    return { 
        planets,
        getPlanet,
        getMoon
    }
})