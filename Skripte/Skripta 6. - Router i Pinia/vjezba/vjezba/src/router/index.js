import { createRouter, createWebHistory } from 'vue-router' // učitavanje potrebnih funkcija
import HomeView from '../views/HomeView.vue' // učitavanje komponente
import AboutView from '../views/AboutView.vue' // učitavanje komponente
import UserView from '../views/UserView.vue' // učitavanje komponente
import NotFoundView from '../views/NotFoundView.vue' // učitavanje komponente
import UserAvatarView from '../views/UserAvatarView.vue' // učitavanje komponente
import UserPostsView from '../views/UserPostsView.vue' // učitavanje komponente

// izrada routera
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // pamćenje navigacije/promjene stranica
    routes: [
        {
            path: '/', // url link stranice
            component: HomeView, // komponenta stranice
            alias: ['/home', '/pocetna']
        },
        {
            path: '/about',
            name: 'opisna stranica',
            component: AboutView
        },
        {
            path: '/user/:username',
            component: UserView,
            name: 'user',
            props: true,
            children: [
                {
                    path: 'avatar',                    
                    component: UserAvatarView,
                },                
                {
                    path: 'posts',                    
                    component: UserPostsView,
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView
        }
    ],
})


router.beforeEach((to, from) => {
    if (to.path == '/apple') return false
    
})

export default router // izvoz routera