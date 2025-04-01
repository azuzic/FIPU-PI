<script setup>
    import { ref } from 'vue';
    defineProps(['slika', 'naslov'])
    const selected = ref(false);
</script>

<template>
    <div class="group/book flex flex-col gap-1 h-fit" :class="{ 'active' : selected }">   

        <div class="text-red-700 font-bold opacity-0 group-hover/book:opacity-100 cursor-pointer hover:underline transition" 
            @click="$emit('ukloni')">
            Ukloni
        </div>  

        <div @click="selected = true" @mouseleave="selected = false" class="relative flex h-64 max-w-12 items-start group-hover/book:rotate-x-10 transition-all duration-300"
            :class="selected ? 'drop-shadow-[-4px_-4px_8px_rgba(224,212,224,1)] -translate-x-54 scale-125' : 'drop-shadow-lg group-hover/book:-translate-x-4 group-hover/book:scale-105'">

            <div class="flex items-center justify-center text-orange-200 bg-gradient-to-b from-orange-900 to-amber-950 rounded-l
                h-64 min-w-12 px-8 text-sm text-center text-pretty transition-all duration-300 [writing-mode:sideways-rl] origin-right"
                :class="{ '-rotate-y-45' : selected }">
                {{ naslov }}
            </div>
            
            <img :src="slika" :alt="naslov" class="h-full rounded-r object-fill transition-all duration-300 origin-left"
                :class="selected ? 'rotate-y-0 max-w-42 min-w-42' :  'rotate-y-60 max-w-24 min-w-24'">
        </div>

    </div>
</template>