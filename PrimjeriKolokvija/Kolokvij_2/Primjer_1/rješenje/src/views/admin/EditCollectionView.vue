<script setup>
    import { useGalleryStore } from "@/stores/galleryStore.js";
    import { useRoute } from "vue-router";
    const galleryStore = useGalleryStore()
    const route = useRoute()

    const editCollection = galleryStore.collections.find(collection => collection.id === route.params.collectionId)

    const removeImage = (image) => {
        editCollection.images.splice(editCollection.images.indexOf(image), 1);
    }
</script>

<template>
    <div>
        <h1>Uređivanje kolekcije</h1>
        <RouterLink to="/admin">Nazad na galeriju</RouterLink>
        <br><br>
        Id: <input type="text" v-model="editCollection.id">
        Naziv: <input type="text" v-model="editCollection.name">
        <br><br>
        <div style="display: flex; gap: 8px">            
            <div v-for="image in editCollection.images" class="collection">                
                ID slike: <input v-model="image.id"><br>
                URL slike: <input v-model="image.url"><br>
                <img :src="image.url" height="200" width="200">   
                <br>          
                Opis: <br><br>
                <textarea class="description"  v-model="image.description"></textarea>
                <br>
                <button @click="removeImage(image)">Ukoni</button>
            </div>
        </div>
        <br>
        <button @click="editCollection.images.push({ id: '', url: '', description: '' })">Dodaj sliku</button>
        <br><br>
        <button @click="galleryStore.updateCollection(editCollection.id, editCollection)">Ažuriraj kolekciju</button>
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