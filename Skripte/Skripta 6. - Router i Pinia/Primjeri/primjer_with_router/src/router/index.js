import LogInView from '@/views/LogInView.vue';
import UserListView from '@/views/UserListView.vue';
import SignUpView from '@/views/SignUpView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import useUser from '@/composables/useUser';
const { 
    username, 
    user,
} = useUser();

import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { 
        path: '/',
        component: UserListView,
        redirect: () => {
            return `/users/${username.value}/list`;            
        },
    },
    { 
        path: '/users/:id/list',
        name: 'UserList',
        component: UserListView,
    },
    {   
        path: '/log-in', 
        name: 'Prijava', 
        component: LogInView,
        meta: { requiresAuth: false },
    },
    { 
        path: '/sign-up',
        name: 'Registracija',
        component: SignUpView,        
        meta: { requiresAuth: false },
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFoundView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from) => {
    console.log(user.value);
    

    if (to.name == 'NotFound' && !user.value) return { name: 'Prijava' }    
    
    if (to.params.id && to.params.id != username.value || to.params.id == 'none') return { name: 'Prijava' }

    if (to.name != 'Prijava' && to.meta.requiresAuth) return { name: 'Prijava' }
})

export default router