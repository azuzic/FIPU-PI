<script setup>
    import { ref } from 'vue';
    import Knjiga from "@/components/Knjiga.vue";
    const props = defineProps(['kolekcija'])

    const novaKnjiga = ref({
        naslov: "",
        slika: ""
    })

    function ukloniKnjigu(index) {
        props.kolekcija.knjige.splice(index, 1);
    }

    function dodajKnjigu() {
        props.kolekcija.knjige.push(novaKnjiga.value);
    }
</script>

<template>
    <div class="relative group flex flex-col gap-2">
        <div class="absolute top-4 group-hover:-top-8 text-lg font-bold">
            {{ kolekcija.naslov }}
        </div>
        <div class="flex gap-2 opacity-0 group-hover:opacity-100 text-sm transition">
            <input type="text" class="ring rounded w-24 px-2 bg-amber-100/25" 
                v-model="novaKnjiga.naslov" placeholder="Naslov...">
            <input type="text" class="ring rounded w-24 px-2 bg-amber-100/25"
                v-model="novaKnjiga.slika" placeholder="Url slike...">
            <button class="bg-sky-600 rounded px-2 hover:bg-sky-500 text-sky-50 cursor-pointer"
                @click="dodajKnjigu()">
                Dodaj
            </button>
        </div>
        <div class="flex gap-1">
            <Knjiga v-for="(knjiga, i) in kolekcija.knjige" 
                :naslov="knjiga.naslov"
                :slika="knjiga.slika"
                @ukloni="ukloniKnjigu(i)"/>
        </div>
    </div>
</template>