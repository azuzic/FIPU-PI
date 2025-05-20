<script setup>
import { ref } from 'vue';
import { updatePassword } from 'firebase/auth';
import { auth } from '@/firebase';

const novaLozinka = ref('');

const promjenjeno = ref(false);
const response = ref({ error: false, message: null })

const promijeniLozinku = async () => {
    try {
        await updatePassword(auth.currentUser, novaLozinka.value);
        promjenjeno.value = true;
        setTimeout(() => {
            promjenjeno.value = false;
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
        <h2>Promjena lozinke</h2> 
        <hr>
        <input v-model="novaLozinka" type="password" placeholder="Nova lozinka">
        <button type="submit">Promijeni lozinku</button>
        <span v-if="promjenjeno" class="text-emerald-600"> Lozinka je uspiješno promijenjena! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>