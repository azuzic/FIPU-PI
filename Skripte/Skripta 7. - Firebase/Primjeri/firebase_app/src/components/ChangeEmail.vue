<script setup>
import { ref } from 'vue';
import { verifyBeforeUpdateEmail } from 'firebase/auth';
import { auth } from '@/firebase';

const noviEmail = ref('');

const promjenjeno = ref(false);
const response = ref({ error: false, message: null })

const promijeniEmail = async () => {
    try {
        await verifyBeforeUpdateEmail(auth.currentUser, noviEmail.value);
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
    <form @submit.prevent="promijeniEmail">
        <h2>Promjena emaila</h2> 
        <hr>
        <input v-model="noviEmail" type="email" placeholder="Email...">
        <button type="submit">Promijeni email</button>
        <span v-if="promjenjeno" class="text-emerald-600"> Email potvrda je poslana! </span>
        <span v-if="response.error" class="text-rose-600">{{ response.message }}</span>
    </form>
</template>