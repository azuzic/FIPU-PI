<script setup>
    import { ref } from "vue";

    const items = ref([
        "banana",
        "jabuka",
        "kruška",
        "lubenica",
        "limun"
    ]);
</script>

<template>
    <ComponentWrapper :data="{items: items}">

        <li v-for="(item, index) in items">
            {{ index }} - {{ item }}
        </li>

    </ComponentWrapper>
</template>