<script setup>
    import { useDucanStore } from "@/stores/ducanStore.js";
    const ducanStore = useDucanStore();
</script>

<template>
    <div>
        <h2>Košarica:</h2>
        <div style="display: flex; gap: 25px; flex-wrap: wrap;">
            <div v-for="product, index in ducanStore.cart" class="product">
                <img :src="product.image" height="100" width="100%" 
                    style="object-fit: contain;">
                    <hr>
                <p><b>{{ product.name }}</b></p>
                <p>Cijena: <b>{{ product.price }}</b>€</p>
                <button @click="ducanStore.removeFromCart(index)">
                    Ukloni
                </button>
            </div>
        </div>
        <br>
        <div>
            Ukupno: <b>{{ ducanStore.cart.reduce((sum, item) => sum + item.price, 0).toFixed(2) }}</b>€
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