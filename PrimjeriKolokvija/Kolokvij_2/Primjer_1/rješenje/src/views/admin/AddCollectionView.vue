<script setup>
    import { useGalleryStore } from "@/stores/galleryStore.js";
    const galleryStore = useGalleryStore()
    import { ref } from 'vue'

    const newCollection = ref({
        id: 'id...',
        name: 'Naziv...',
        description: 'Opis...',
        images: [
            { id: 'id...', url: 'URL...', description: 'Opis...' }
        ]
    })

    const removeImage = (image) => {
        newCollection.value.images.splice(newCollection.value.images.indexOf(image), 1);
    }
</script>

<template>
    <div>
        <h1>Dodavanje kolekcije</h1>
        <RouterLink to="/admin">Nazad na galeriju</RouterLink>
        <br><br>
        Id: <input type="text" v-model="newCollection.id">
        Naziv: <input type="text" v-model="newCollection.name">
        <br><br>
        <div style="display: flex; gap: 8px">            
            <div v-for="image in newCollection.images" class="collection">
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
        <button @click="newCollection.images.push({ id: '', url: '', description: '' })">Dodaj sliku</button>
        <br><br>
        <button @click="galleryStore.addCollection(newCollection)">Dodaj kolekciju</button>
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