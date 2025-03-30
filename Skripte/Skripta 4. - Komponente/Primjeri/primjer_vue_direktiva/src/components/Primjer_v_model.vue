<script setup>
    import { ref } from "vue";

    const unos = ref("");
    const potvrda = ref(false);
</script>

<template>
    <ComponentWrapper :data="{unos: unos, potvrda: potvrda}">
        <input v-model="unos" type="text" class="border p-1 rounded" placeholder="Upiši nešto...">
        <p><b>Text:</b> {{ unos }}</p> <br>
        
        <label>
            <input type="checkbox" v-model="potvrda">
            Prihvaćam uvjete
        </label>
        <p><b>Potvrda:</b> {{ potvrda ? "Prihvaćeno" : "Odbijeno" }}</p>
    </ComponentWrapper>
</template>