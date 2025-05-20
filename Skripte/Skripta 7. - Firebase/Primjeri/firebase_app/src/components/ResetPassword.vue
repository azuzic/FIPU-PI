<script setup>
import { ref } from 'vue';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';

const email = ref('');

const poslano = ref(false);
const response = ref({ error: false, message: null })

const promijeniLozinku = async () => {
    try {
        await sendPasswordResetEmail(auth, email.value);
        poslano.value = true;
        setTimeout(() => {
            poslano.value = false;
        }, 3000)
        response.value.error = false;
    } catch (error) {
        response.value.error = true;
        response.value.message =  error.message;
    }
};
</script>

<template>
    <form @submit.prevent="promijeniLozinku">
        <h2>Resetiranje lozinke</h2> 
        <hr>
        <input v-model="email" type="email" placeholder="Email...">
        <button type="submit">Resetiraj lozinku</button>
        <span v-if="poslano" class="text-emerald-600"> Email za resetiranje lozinke uspiješno poslan! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>