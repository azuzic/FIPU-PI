<script setup>
import { ref } from 'vue';
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '@/firebase.js'

const email = ref('');
const password = ref('');

const reauthDone = ref(false);
const response = ref({ error: false, message: null })

const reauthenticate = async () => {
    try {
        const credential = EmailAuthProvider.credential(email.value, password.value);
        await reauthenticateWithCredential(auth.currentUser, credential);
        reauthDone.value = true;
        setTimeout(() => {
            reauthDone.value = false;
        }, 3000)
        response.value.error = false;
    } catch (error) {
        response.value.error = true;
        response.value.message =  error.message;
    }
};
</script>

<template>
    <form @submit.prevent="reauthenticate">
        <h2>Ponovna autentifikacija</h2>
        <hr>

        <input v-model="email" type="email" placeholder="Email...">
        <input v-model="password" type="password" placeholder="Lozinka...">
        
        <button type="submit">Ponovno se autentificiraj</button>

        <span v-if="reauthDone" class="text-emerald-600"> Ponovna autentifikacija uspješna! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>