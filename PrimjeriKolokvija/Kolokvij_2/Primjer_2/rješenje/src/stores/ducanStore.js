import { ref } from 'vue'
import { defineStore } from 'pinia'
import proizvodiData from '@/data/proizvodiData.js'

export const useDucanStore = defineStore('ducanStore', () => {

    const products = ref(proizvodiData.proizvodi);
    const cart = ref([]);
    
    const addToCart = ((product) => {
        cart.value.push(product)
    }) 
    const removeFromCart = ((index) => {
        cart.value.splice(index, 1);
    })
    const addProduct = ((product) => {
        products.value.push(product)
    })
    const removeProduct = ((index) => {
        products.value.splice(index, 1);
    })

    return { 
        products,
        cart,
        addToCart,
        removeFromCart,
        addProduct,
        removeProduct
    }
})
