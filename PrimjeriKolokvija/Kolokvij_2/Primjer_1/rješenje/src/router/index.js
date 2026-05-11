import { createRouter, createWebHistory } from 'vue-router'

import CollectionListView from '@/views/user/CollectionListView.vue'
import CollectionView from '@/views/user/CollectionView.vue'
import ImageView from '@/views/user/ImageView.vue'

import AdminView from '@/views/admin/AdminView.vue'
import AddCollectionView from '@/views/admin/AddCollectionView.vue'
import EditCollectionView from '@/views/admin/EditCollectionView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/gallery'
        },
        {
            path: '/gallery',
            component: CollectionListView
        },
        {
            path: '/gallery/:collectionId',
            component: CollectionView,
            props: true
        },
        {
            path: '/gallery/:collectionId/:imageId',
            component: ImageView,
            props: true
        },
        {
            path: '/admin',
            component: AdminView
        },
        {
            path: '/admin/add',
            component: AddCollectionView,
        },
        {
            path: '/admin/:collectionId/:edit',
            component: EditCollectionView,
            props: true
        },
    ],
})

export default router