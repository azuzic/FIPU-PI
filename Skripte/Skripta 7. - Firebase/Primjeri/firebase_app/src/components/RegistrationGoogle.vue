<script setup>
import { ref } from 'vue';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase.js'
import Message from './Message.vue';
import GoogleButton from './GoogleButton.vue';

const response = ref({ error: false, message: null })

const register = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        response.value.error = false;       
        response.value.message = JSON.parse(JSON.stringify(userCredential.user));
    } catch (error) {
        response.value.error = true;
        response.value.message =  error.message;
    }
};
</script>

<template>
    <form @submit.prevent="register">
        <h2>Google registracija</h2> 
        <hr>

        <GoogleButton/>

        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
        <Message v-else class="text-emerald-600" :data="response.message"/>
    </form>
</template>