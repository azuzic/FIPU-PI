import { ref } from 'vue'
import { defineStore } from 'pinia'
import collectionsData from '@/data/collectionsData.js'

export const useGalleryStore = defineStore('galleryStore', () => {

    const collections = ref(collectionsData.collections)

    const comments = ref({})

    function addComment(imageId, comment) {
        if (typeof comments.value[imageId] != 'object') comments.value[imageId] = [];
        comments.value[imageId].push(comment);
    }

    function addCollection(collection) {
        collections.value.push(collection);
    }

    function updateCollection(id, updatedCollection) {
        const index = collections.value.findIndex(collection => collection.id === id);
        if (index !== -1) {
            collections.value[index] = { ...collections.value[index], ...updatedCollection };
        }
    }

    function deleteCollection(id) {
        collections.value = collections.value.filter(collection => collection.id !== id);
    }

    return {
        collections,
        comments,
        addComment,
        addCollection,
        updateCollection,
        deleteCollection
    }
})
