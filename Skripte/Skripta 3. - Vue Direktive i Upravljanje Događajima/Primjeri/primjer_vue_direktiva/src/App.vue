<script setup>
import { ref } from "vue"
import Primjer_v_html_and_v_text from "@/components/Primjer_v_html_and_v_text.vue";

const trenutniPrimjer = ref(true);

const primjeri = [
    "v-html & v-text",
    "v-bind",
    "v-if, v-else, v-else-if",
    "v-show",
    "v-for",
    "v-on",
    "v-model",
    "v-pre & v-once",
    "v-slot"
]

</script>

<template>
    <div class="h-full flex flex-col gap-4 p-16 bg-zinc-50 text-zinc-800">     
        <h1 class="text-center text-4xl font-bold">
            Primjeri
        </h1>
        <div class="flex w-full items-center justify-center border-y-1 border-zinc-700/25 py-4 gap-2">

            <button v-for="(primjer, i) in primjeri" class="ring-1 rounded px-2 transition" 
                @click="trenutniPrimjer = i" :class="i==trenutniPrimjer ? 'bg-emerald-200 ring-emerald-800' : 
                    'hover:bg-sky-200 hover:ring-2 cursor-pointer bg-sky-50 ring-sky-800'">
                {{ primjer }}
            </button>

        </div>
        <div class="flex items-center justify-center h-full">

            <Primjer_v_html_and_v_text v-if="trenutniPrimjer == 0"/>

        </div>
    </div>
</template>