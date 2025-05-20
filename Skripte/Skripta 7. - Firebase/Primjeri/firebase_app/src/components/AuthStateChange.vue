<script setup>
import { ref } from 'vue';
import { onAuthStateChanged  } from 'firebase/auth';
import { auth } from '@/firebase.js'

const user = ref(null)

onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
        user.value = currentUser;
    } else {
        user.value = null;
    }
});
</script>

<template>
    <form @submit.prevent="user.reload()">
        <h2>Stanje autentifikacije</h2> 
        <hr>
        <span v-if="!user" class="text-rose-600"> Nema prijavljenog korisnika! </span>
        <span v-else class="text-emerald-600"> Prijavljen korisnik: <b>{{ user.email }}</b> </span>
        <span v-if="user" class="text-emerald-600"> Email potvrđen: <b>{{ user.emailVerified }}</b> </span>
        <span v-if="user" class="text-emerald-600"> Vrsta registracije: <b>{{ user.providerData[0].providerId }}</b> </span>
        <span v-if="user && user.photoURL" class="text-emerald-600 inline-flex items-center gap-2"> 
            Korisnička slika: <img v-if="user.photoURL" :src="user.photoURL"/>
        </span>
        <span v-if="user" class="text-emerald-600"> Račun izrađen: 
            <b>{{ new Date(Number.parseInt(user.metadata.createdAt)).toLocaleString() }}</b>
        </span>
        <span v-if="user" class="text-emerald-600"> Zadnja prijava:
            <b>{{ new Date(Number.parseInt(user.metadata.lastLoginAt)).toLocaleString() }}</b>
        </span>
        <button type="submit" v-if="user">
            Osvježi korisničke podatke
        </button>
    </form>
</template>