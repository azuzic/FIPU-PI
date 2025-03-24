<script setup>
import { defineProps } from "vue";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
defineProps({
    data: Object,
})
</script>

<template>
    <div class="h-full w-full grid grid-rows-2 overflow-auto px-4">
        <div class="flex flex-col w-full h-full">
            <h2 class="text-lg my-2">Rezultat:</h2>
            <div class="w-full grow border border-zinc-700/25 rounded p-2 overflow-auto">
                <slot/>
            </div>
        </div>
        <div class="flex flex-col">
            <h2 class="text-lg my-2">Varijable:</h2>
            <VueJsonPretty :data="data" class="w-full h-full overflow-y-auto border border-zinc-700/25 rounded p-2"/>
        </div>
    </div>
</template>