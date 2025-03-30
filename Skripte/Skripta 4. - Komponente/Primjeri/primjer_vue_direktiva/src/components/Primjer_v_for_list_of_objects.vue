<script setup>
    import { ref } from "vue";

    const korisnici = ref([
        { ime: "Ivan", prezime: "Horvat", godine: 25 },
        { ime: "Ana", prezime: "Kovač", godine: 30 },
        { ime: "Marko", prezime: "Babić", godine: 22 }
    ]);
</script>

<template>
    <ComponentWrapper :data="{korisnici: korisnici}">

        <ul>
            <li v-for="korisnik in korisnici">
                {{ korisnik.ime }} {{ korisnik.prezime }} - {{ korisnik.godine }} godina
            </li>
        </ul>

    </ComponentWrapper>
</template>