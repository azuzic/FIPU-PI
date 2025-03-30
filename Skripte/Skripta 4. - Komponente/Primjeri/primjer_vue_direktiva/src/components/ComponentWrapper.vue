<script setup>
import { defineProps, ref } from "vue";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
const hideVars = ref(false);
defineProps({
    data: Object,
})
</script>

<template>
    <div class="h-full w-full grid overflow-auto px-4" :class="!hideVars ? 'grid-rows-2' : 'grid-rows-1'">
        <div class="flex flex-col w-full h-full">
            <div class="flex gap-1 items-center">            
                <h2 class="text-lg my-2">Rezultat:</h2>
                <span class="text-sm ml-4 flex gap-4 items-center">
                    <span>Hide Vars: <input type="checkbox" v-model="hideVars"/></span>
                </span>
            </div>
            <div class="w-full grow border border-zinc-700/25 rounded p-2 overflow-auto">
                <slot/>
            </div>
        </div>
        <div v-if="!hideVars" class="flex flex-col">
            <h2 class="text-lg my-2">Varijable:</h2>
            <VueJsonPretty :data="data" class="w-full h-full overflow-y-auto border border-zinc-700/25 rounded p-2"/>
        </div>
    </div>
</template>