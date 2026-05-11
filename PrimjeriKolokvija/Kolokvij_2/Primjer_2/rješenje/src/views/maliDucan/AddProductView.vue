<script setup>
    import { ref } from 'vue'
    import { useDucanStore } from "@/stores/ducanStore.js";
    const ducanStore = useDucanStore();
    const name = ref("")
    const price = ref(0)
    const image = ref("")
</script>

<template>
    <div>
        <u @click="$router.go(-1)" style="cursor: pointer;">
            Back
        </u>
        <h2>Izrada novog proizvoda:</h2>
        <hr>
        <form @submit.prevent="ducanStore.addProduct({
            'name': name,
            'price': price,
            'image': image
        })">
            Naziv: <input type="text" v-model="name" placeholder="Naziv...">
            <br><br>
            Cijena: <input type="number" step="0.01" v-model="price">
            <br><br>
            Slika: <input type="text" v-model="image" placeholder="Url slike...">
            <br>
            <img :src="image">
            <hr>
            <button type="submit">Dodaj</button>
        </form>
    </div>
</template>