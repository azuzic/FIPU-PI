<script setup>
    import { useCounter } from '@/composables/useCounter.js'
</script>

<template>
    Count: <b>{{ useCounter().count }}</b>
</template>