<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.js'
import Message from './Message.vue';

const email = ref('');
const password = ref('');
const response = ref({ error: false, message: null })

const register = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
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
        <h2>Registracija</h2> 
        <hr>

        <input v-model="email" type="email" placeholder="Email...">
        <input v-model="password" type="password" placeholder="Lozinka...">

        <button type="submit">Registriraj se</button>

        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
        <Message v-else class="text-emerald-600" :data="response.message"/>
    </form>
</template>