<script setup>
    import { ref } from 'vue'

    const a = ref(4);
    const b = 2;
    const c = ref("Izračun:");

    function pozdrav() {
        console.log("Ahoy!");        
    }

    defineExpose({
        a, 
        b,
        pozdrav
    })
</script>

<template>
    <input type="number" v-model="a" class="rounded p-1 border">
    <div>
        {{ c }} {{ a }} % {{ b }} is {{ a % b == 0 }}
    </div>
</template>