<script setup>
    import { useDucanStore } from "@/stores/ducanStore.js";
    const ducanStore = useDucanStore();
</script>

<template>
    <div>     
        <h2>Admin sučelje:</h2>
        <RouterLink to="/admin/add">
            Dodavanje proizvoda
        </RouterLink>
        <br><br>
        <div style="display: flex; gap: 25px; flex-wrap: wrap;">
            <div v-for="product, index in ducanStore.products" class="product">
                <img :src="product.image" height="100" width="100%" 
                    style="object-fit: contain;">
                    <hr>
                <p><b>{{ product.name }}</b></p>
                <p>Cijena: <b>{{ product.price }}</b>€</p>
                <button @click="ducanStore.removeProduct(index)">
                    Obriši
                </button>
            </div>
        </div>     
    </div>
</template>

<style scoped>
    .product {
        border: 1px solid;
        border-radius: 8px;
        padding: 8px;
    }
</style>