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
        {
            path: '/',
            redirect: '/solarsystem'
        },
        {
            path: '/solarsystem',
            component: SolarSystemView
        },
        {
            path: '/solarsystem/:planet',
            component: PlanetView
        },
        {
            path: '/solarsystem/:planet/:moon',
            component: MoonView
        }
    ],
})

const routerDucan = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/shop',
            component: ShopView
        },
        {
            path: '/cart',
            component: CartView
        },
        {
            path: '/admin',
            component: AdminView
        },
        {
            path: '/admin/add',
            component: AddProductView
        }
    ],
})

export default routerSolarSystem