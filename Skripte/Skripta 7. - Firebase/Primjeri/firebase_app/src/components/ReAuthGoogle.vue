<script setup>
import { ref } from 'vue';
import { GoogleAuthProvider, reauthenticateWithPopup } from 'firebase/auth';
import { auth } from '@/firebase.js'
import GoogleButton from './GoogleButton.vue';

const reauthDone = ref(false);
const response = ref({ error: false, message: null })

const reauthenticateWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await reauthenticateWithPopup(auth.currentUser, provider);
        reauthDone.value = true;
        setTimeout(() => { reauthDone.value = false; }, 3000);
        response.value.error = false;
    } catch (error) {
        response.value.error = true;
        response.value.message = error.message;
    }
};
</script>

<template>
    <form @submit.prevent="reauthenticateWithGoogle">
        <h2>Ponovna Google autentifikacija</h2>
        <hr>
        
        <GoogleButton>Google reauthentication</GoogleButton>

        <span v-if="reauthDone" class="text-emerald-600"> Ponovna autentifikacija uspješna! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>