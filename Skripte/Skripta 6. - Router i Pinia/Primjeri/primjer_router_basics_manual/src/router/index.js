import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NotFound from '../views/NotFound.vue'
import UserPostsView from '../views/UserPostsView.vue'
import UserAvatarView from '../views/UserAvatarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/pocetna'
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/users/:username',
      component: UserView,
      name: 'user',
      props: true,
      children: [
        {
          path: 'posts',
          component: UserPostsView,
        },
        {
          path: 'avatar',
          component: UserAvatarView,
        },
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound
    },
  ],
})

router.beforeEach((to, from) => {
  console.log(to.params);
})

export default router
