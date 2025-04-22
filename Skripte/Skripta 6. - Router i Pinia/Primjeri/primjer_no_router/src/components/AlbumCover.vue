<script setup>
    defineProps(["album"]);
    defineEmits(["remove"])
</script>

<template>
    <div class="relative z-20 bg-gray-800 rounded-t-lg overflow-hidden shadow-xl flex flex-col">
        <div class="flex-grow aspect-square relative overflow-hidden">
            <img :src="album.cover" :alt="album.title" 
                class="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </div>
        
        <button @click="$emit('remove')" class="absolute top-2 right-2 bg-rose-700 hover:bg-rose-600
            cursor-pointer hover:scale-90 bg-opacity-80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</template>