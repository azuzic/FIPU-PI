<script setup>
    import { useGalleryStore } from "@/stores/galleryStore.js";
    const galleryStore = useGalleryStore()
    import { useRouter } from "vue-router";
    const router = useRouter();

    function editCollection(collection) {
        galleryStore.currentCollection = collection;
        router.push(`/admin/${collection.id}/edit`)
    }
</script>

<template>
    <div>
        <h1>Galerija - Admin</h1>
        
        <RouterLink :to="`/admin/add`">Dodavanje kolekcije</RouterLink>
        <br>
        <br>
        <div style="display: flex; gap: 8px">            
            <div v-for="collection in galleryStore.collections" class="collection">
                <h3>{{ collection.name }}</h3>
                <p class="description">{{ collection.description }}</p>
                <img :src="collection.images[0].url" height="300">
                <br>
                <hr>
                <button @click="editCollection(collection)" class="button">
                    Ažuriraj
                </button>
                <button @click="galleryStore.deleteCollection(collection.id)" class="button_delete">
                    Obriši
                </button>
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
    }
    .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
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
    .button_delete {
        background-color: #f0bbbb;
        padding: 6px 10px;
        border: none;
        border-radius: 4px;
        margin: 4px;
    }
    .button_delete:hover {
        background-color: #9e1111;
        color: white;
        cursor: pointer;
    }
</style>