<script setup>
    import { ref } from 'vue';
    import Kolekcija from "@/components/Kolekcija.vue";
    const lotrKolekcija = ref({
        naslov: "Gospodar prstenova",
        knjige: [
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
        ]
    })
    const harryPotterKolekcija = ref({
        naslov: "Harry Potter",
        knjige: [
            { 
                naslov: 'Harry Potter i Kamen mudraca', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/4/4a/HP1.jpg' 
            },
            { 
                naslov: 'Harry Potter i Odaja tajni', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/e/e7/Harry_Potter2.jpg' 
            },
            { 
                naslov: 'Harry Potter i zatočenik Azkabana', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/d/d2/Harry_Potter_i_zato%C4%8Denik_Azkabana.jpg' 
            },
            { 
                naslov: 'Harry Potter i Plameni pehar', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/thumb/b/b2/Harry_Potter_i_Plameni_pehar.jpg/200px-Harry_Potter_i_Plameni_pehar.jpg' 
            },
            { 
                naslov: 'Harry Potter i Red feniksa', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/thumb/2/2b/HPcover2..jpg/200px-HPcover2..jpg' 
            },
            { 
                naslov: 'Harry Potter i Princ miješane krvi', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/thumb/b/b3/HPcover6..jpg/200px-HPcover6..jpg' 
            },
            { 
                naslov: 'Harry Potter i Darovi smrti', 
                slika: 'https://upload.wikimedia.org/wikipedia/hr/thumb/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg/250px-Harry_Potter_and_the_Deathly_Hallows.jpg' 
            }
        ]
    })
</script>

<template>
    <div class="h-full flex flex-col items-center bg-gradient-to-br from-gray-200 via-slate-50 to-stone-300 text-gray-800 px-60 pt-8 gap-8">
        <div class="text-3xl font-bold">
            Digitalna Knjižnica
        </div>
        <div class="flex flex-col w-full pt-4 rounded-xl"
            style="background-image: url(https://i.pinimg.com/originals/b9/ea/4e/b9ea4e526fb0fc0fd8038ac713fbb881.jpg)">
            <div class="flex gap-8 px-8 pt-4">
                <Kolekcija :kolekcija="lotrKolekcija"/>
                <Kolekcija :kolekcija="harryPotterKolekcija"/>
            </div>
            <div class="flex items-center bg-orange-950 rounded-lg text-orange-100 text-xl px-8 py-1">
                Fantazija
            </div>
        </div>
    </div>
</template>
