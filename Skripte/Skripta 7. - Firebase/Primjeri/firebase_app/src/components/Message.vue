<script setup>
    import VueJsonPretty from 'vue-json-pretty';
    import 'vue-json-pretty/lib/styles.css';
    const props = defineProps(['data'])
</script>
<template>
    <vue-json-pretty v-if="data" :data="data" class="max-h-64 overflow-y-auto text-xs"/>
</template>