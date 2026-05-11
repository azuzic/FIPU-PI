<script setup>
    import { useGalleryStore } from "@/stores/galleryStore.js";
    const galleryStore = useGalleryStore()
    const props = defineProps(['collectionId'])
    const collection = galleryStore.collections.find(i => i.id == props.collectionId)
</script>

<template>
    <div>
        <h1>Kolekcija</h1>
        <RouterLink to="/gallery">Nazad na galeriju</RouterLink>
        <br><br>
        <h2>{{ collection.name }}</h2>
        <div style="display: flex; gap: 8px">            
            <div v-for="image in collection.images" class="collection">
                <RouterLink :to="`/gallery/${collection.id}/${image.id}`">
                    <img :src="image.url" height="200" width="200">
                </RouterLink>
                <p class="description">{{ image.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .collection {
        border: 1px solid #ccc;
        padding: 4px 16px;
        border-radius: 4px;
        width: min-content;
        display: flex;
        flex-direction: column;
    }
    .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        flex-grow: 1;
    }
    img {
        border-radius: 4px;
        object-fit: cover;        
    }
    img:hover {
        scale: 95%;
        cursor: pointer;
    }
    .button {
        padding: 6px 10px;
        border: none;
        border-radius: 4px;
        margin: 4px;
    }
    .button:hover {
        background-color: #11379e;
        color: white;
        cursor: pointer;
    }
</style>