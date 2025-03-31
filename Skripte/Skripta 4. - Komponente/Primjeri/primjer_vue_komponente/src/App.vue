<script setup>
    import { ref } from 'vue';
    import Knjiga from "@/components/Knjiga.vue";
    const knjige = ref([
        { 
            naslov: 'Gospodar prstenova - Prstenova družina', 
            slika: './src/assets/images/books/fantasy/lotr_1.png' 
        },
        { 
            naslov: 'Gospodar prstenova - Dvije kule', 
            slika: './src/assets/images/books/fantasy/lotr_2.png' 
        },
        { 
            naslov: 'Gospodar prstenova - Povratak kralja', 
            slika: './src/assets/images/books/fantasy/lotr_3.png' 
        }
    ])
</script>

<template>
    <div class="h-full flex flex-col items-center p-8 bg-gradient-to-br
        from-gray-200 via-slate-50 to-stone-300 text-gray-800">
        <div class="text-3xl font-bold">
            Digitalna Knjižnica
        </div>
        <div class="flex gap-1 p-8">
            <Knjiga v-for="knjiga in knjige" 
                :naslov="knjiga.naslov"
                :slika="knjiga.slika"/>
        </div>
    </div>
</template>