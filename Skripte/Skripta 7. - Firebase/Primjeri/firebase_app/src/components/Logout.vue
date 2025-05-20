<script setup>
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase.js'
import { ref } from 'vue';

const odjava = ref(false);

const logout = () => {
    signOut(auth);
    odjava.value = true;
    setTimeout(() => {
        odjava.value = false;
    }, 3000)
};
</script>

<template>
    <form @submit.prevent="logout">
        <h2>Odjava</h2> 
        <hr>
        <button type="submit">Odjavi se</button>
        <span v-if="odjava" class="text-emerald-600"> Korisnik je odjavljen! </span>
    </form>
</template>