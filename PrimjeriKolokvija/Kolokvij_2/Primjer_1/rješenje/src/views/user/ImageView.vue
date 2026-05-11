<script setup>
    import { useGalleryStore } from "@/stores/galleryStore.js";
    const galleryStore = useGalleryStore()
    import { ref } from "vue";
    
    const props = defineProps(['imageId', 'collectionId'])   
    const currentCollection = galleryStore.collections.find(i => i.id == props.collectionId)
    const image = currentCollection.images.find(i => i.id == props.imageId)

    const noviKomentar = ref("");
</script>

<template>
    <div>
        <h1>Kolekcija</h1>
        <RouterLink :to="`/gallery/${currentCollection.id}`">Nazad na kolekciju</RouterLink>
        <br><br>         
        <img :src="image.url" height="500px" @click="openImage(image)">
        <p class="description">{{ image.description }}</p>
        <hr>
        <b>Komentari:</b><br>
        Novi komentar: <input type="text" v-model="noviKomentar"> 
        <button @click="galleryStore.addComment(imageId, noviKomentar)">Dodaj komentar</button>
        <p v-for="comment, i in galleryStore.comments[imageId]" class="comment">
            <b>{{ i+1 }}.</b> {{ comment }}
        </p>
    </div>
</template>

<style scoped>
    .comment {
        border: 1px solid #ccc;
        padding: 4px 16px;
        border-radius: 4px;
        width: fit-content;
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