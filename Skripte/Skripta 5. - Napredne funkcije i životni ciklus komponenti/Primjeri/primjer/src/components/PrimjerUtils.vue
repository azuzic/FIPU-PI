<script setup>
    import { ref } from "vue";
    import { capitalize } from '@/utils/stringUtils.js'
    import { useUserFormatter } from '@/composables/useUserFormatter.js'

    const user = ref({
        ime: "marko",
        prezime: "markić"
    })
</script>

<template>
    <div class="h-full flex flex-col p-8 items-center justify-center">

        <input type="text" v-model="user.ime" 
            class="rounded p-1 border">
        <input type="text" v-model="user.prezime" 
            class="rounded p-1 border my-2">

        {{ capitalize(user.ime) }} {{ capitalize(user.prezime) }}

        <br>

        {{ useUserFormatter(user) }}

    </div>
</template>