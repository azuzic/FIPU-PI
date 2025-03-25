<script setup>
    import { ref } from "vue";

    const brojevi = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>

<template>
    <ComponentWrapper :data="{brojevi: brojevi}">

        <h2>Parni brojevi:</h2>
        
        <div v-for="broj in brojevi">
            <div v-if="broj % 2 === 0">
                - {{ broj }}
            </div>
        </div>

    </ComponentWrapper>
</template>