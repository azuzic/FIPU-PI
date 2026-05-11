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

    ],
})

export default router