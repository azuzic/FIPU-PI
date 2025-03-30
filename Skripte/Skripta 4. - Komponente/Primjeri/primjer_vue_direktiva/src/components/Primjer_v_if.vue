<script setup>
    import { ref } from "vue";

    const broj = ref(6)
    const prikazi = ref(false)
</script>

<template>
    <ComponentWrapper :data="{broj: broj, prikazi: prikazi}">

        <b>Prikaži:</b> <input type="checkbox" v-model="prikazi">

        <div v-if="prikazi">
            Hello!
        </div>

        <br/><br/>

        <b>Broj:</b> <input type="number" v-model="broj" class="border p-1 rounded">

        <div v-if="broj%2==0 && broj%3==0">
            Broj {{ broj }} je djeljiv sa 2 i 3
        </div>
        <div v-else-if="broj%2==0">
            Broj {{ broj }} je djeljiv 2
        </div>
        <div v-else-if="broj%3==0">
            Broj {{ broj }} je djeljiv 3
        </div>
        <div v-else>
            Broj {{ broj }} <b>nije</b> djeljiv sa 2 i 3
        </div>

    </ComponentWrapper>
</template>