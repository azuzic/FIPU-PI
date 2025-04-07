<script setup>
    import PrikazBrojaca from './PrikazBrojaca.vue';
    import { useCounter } from '@/composables/useCounter.js'
</script>

<template>
    <div class="h-full flex p-8 items-center justify-center">

        <div class="h-64">

            <PrikazBrojaca/>

            <br>

            <button @click="useCounter().increment"
                class="border hover:bg-slate-200 cursor-pointer p-1 rounded">
                Increment
            </button>

        </div>

    </div>
</template>