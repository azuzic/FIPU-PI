<script setup>
    import { ref } from "vue";

    const korisnik = ref(
        { ime: "Ivan", prezime: "Ivanić", godine: 25 },
    );
</script>

<template>
    <ComponentWrapper :data="{korisnik: korisnik}">

        <ul>
            <li v-for="(value, key, index) in korisnik">
                {{index}} > <b>{{ key }}:</b> {{ value }}
            </li>
        </ul>

    </ComponentWrapper>
</template>