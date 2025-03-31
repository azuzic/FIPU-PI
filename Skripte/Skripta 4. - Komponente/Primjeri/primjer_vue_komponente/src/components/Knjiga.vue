<script setup>
    const props = defineProps(['slika', 'naslov'])
    console.log(props.naslov);
</script>

<template>
    <div class="group flex h-64 max-w-12 items-start hover:z-10 hover:rotate-x-10 hover:translate-y-4
        active:-translate-x-21 active:border-0 active:scale-125 transition-all duration-300
        active:drop-shadow-[-4px_-4px_8px_rgba(224,212,224,1)]">
        <div class="flex items-center justify-center text-orange-200 bg-gradient-to-b from-orange-900 to-amber-950 rounded-l
            h-64 min-w-12 px-4 py-1 text-sm text-center text-pretty transition-all duration-300   
            [writing-mode:sideways-rl] origin-right group-active:-rotate-y-45">
            {{ naslov }}
        </div>
        <img :src="slika" :alt="naslov" class="h-full max-w-12 min-w-12 rounded-r object-fill 
            rotate-y-90 transition-all duration-300 group-active:min-w-42 
            origin-left group-active:rotate-y-0 group-active:max-w-42">      
    </div>
</template>