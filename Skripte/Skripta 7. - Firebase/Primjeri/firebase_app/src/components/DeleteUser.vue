<script setup>
import { deleteUser } from 'firebase/auth';
import { auth } from '@/firebase.js'
import { ref } from 'vue';

const deleted = ref(false);
const response = ref({ error: false, message: null })

const obrisiKorisnika = async () => {
    try {
        await deleteUser(auth.currentUser);
        deleted.value = true;
        setTimeout(() => {
            deleted.value = false;
        }, 3000)
    } catch (error) {
        response.value.error = true;
        response.value.message =  error.message;
    }
};
</script>

<template>
    <form @submit.prevent="obrisiKorisnika">
        <h2>Brisanje korisničkog računa</h2> 
        <hr>
        <button type="submit">Obriši korisnički račun</button>
        <span v-if="deleted" class="text-emerald-600"> Korisnički račun je obrisan! </span>
    </form>
</template>