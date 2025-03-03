<script setup>
    import { Icon } from "@iconify/vue";
    defineProps({
        name: String,
        icon: String,
    })
</script>

<template>
    <li class="p-2 bg-blue-500 text-white rounded-lg 
        shadow-md flex items-center space-x-2">
        <Icon :icon="icon" width="32" height="32" />
        <span>{{ name }}</span>
    </li> 
</template>

