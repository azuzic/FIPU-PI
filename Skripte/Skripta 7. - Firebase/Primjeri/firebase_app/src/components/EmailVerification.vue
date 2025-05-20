<script setup>
import { ref } from 'vue';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '@/firebase.js'

const poslano = ref(false);
const response = ref({ error: false, message: null })

const sendVerification = async () => {
    try {
        await sendEmailVerification(auth.currentUser);
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
    <form @submit.prevent="sendVerification">
        <h2>Slanje email potvrde</h2>
        <hr>
        <button type="submit">Pošalji email potvrdu</button>
        <span v-if="poslano" class="text-emerald-600"> Email potvrda je poslana! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>