<script setup>
    import { ref } from "vue";

    const ucenici = ref([
        { ime: "Ana", bodovi: 85 },
        { ime: "Marko", bodovi: 92 },
        { ime: "Petra", bodovi: 78 },
        { ime: "Ivan", bodovi: 60 }
    ]);

    const minBodovi = ref(70);

    function sortirajPoBodovima(ulazno) {
        ucenici.value.sort((a, b) => ulazno ? b.bodovi - a.bodovi : a.bodovi - b.bodovi);
    }
</script>

<template>
    <ComponentWrapper :data="{ucenici: ucenici, minBodovi: minBodovi}">

        <label>
            Minimalan broj bodova:
            <input type="number" v-model="minBodovi" class="border p-1 rounded w-32">
        </label>

        <button @click="sortirajPoBodovima(true)" 
            class="ml-2 p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            Sortiraj Uzlazno
        </button>

        <button @click="sortirajPoBodovima(false)" 
            class="ml-2 p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            Sortiraj Silazno
        </button>

        <div v-for="ucenik in ucenici.filter(u => u.bodovi >= minBodovi)">
            <b>{{ ucenik.ime }}</b> - {{ ucenik.bodovi }} bodova
        </div>

    </ComponentWrapper>
</template>