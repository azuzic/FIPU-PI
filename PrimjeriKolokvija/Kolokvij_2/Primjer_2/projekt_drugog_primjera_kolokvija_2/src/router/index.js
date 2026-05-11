import { createRouter, createWebHistory } from 'vue-router'

import SolarSystemView from '@/views/solarSystem/SolarSystemView.vue'
import PlanetView from '@/views/solarSystem/PlanetView.vue'
import MoonView from '@/views/solarSystem/MoonView.vue'

import ShopView from '@/views/maliDucan/ShopView.vue'
import CartView from '@/views/maliDucan/CartView.vue'
import AdminView from '@/views/maliDucan/AdminView.vue'
import AddProductView from '@/views/maliDucan/AddProductView.vue'

const routerSolarSystem = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        
    ],
})

const routerDucan = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

    ],
})

export default routerSolarSystem