<script setup>
    import { ref } from 'vue';
    import Ormar from './components/Ormar.vue';
    const policaKnjiga = ref([
        {
            žanr: "Fantasy",
            kolekcije: [
                {
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
                },
                {
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
                }
            ]
        },
        {
            žanr: "Sci-Fi",
            kolekcije: [
                {
                    naslov: "Dina",
                    knjige: [
                        { 
                            naslov: 'Dina', 
                            slika: 'https://www.izvori.com/images/medium_cover/2158.jpg' 
                        },
                        { 
                            naslov: 'Mesija Dine', 
                            slika: 'https://www.izvori.com/images/medium_cover/2163.jpg' 
                        },
                        { 
                            naslov: 'Djeca Dine', 
                            slika: 'https://www.izvori.com/images/medium_cover/2170.jpg' 
                        },
                        { 
                            naslov: 'Božanski car Dine', 
                            slika: 'https://www.izvori.com/images/medium_cover/2189.jpg' 
                        },
                        { 
                            naslov: 'Heretici Dine', 
                            slika: 'https://www.izvori.com/images/medium_cover/2198.jpg' 
                        },
                        { 
                            naslov: 'Kapitol Dina', 
                            slika: 'https://www.izvori.com/images/medium_cover/2204.jpg' 
                        },
                    ]
                },
            ]
        }
    ])
    const policaStripova = ref([
        {
            žanr: "Dark Fantasy",
            kolekcije: [
                {
                    naslov: "Berserk",
                    knjige: [
                        { 
                            naslov: 'Berserk Volume 1', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/12/12705.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 2', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/12/12706.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 3', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/12/12707.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 4', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/13/13287.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 5', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10163.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 6', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10164.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 7', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10486.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 8', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10490.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 9', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10491.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 10', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/10/10699.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 11', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/13/13389.jpg' 
                        },
                        { 
                            naslov: 'Berserk Volume 12', 
                            slika: 'https://d2lzb5v10mb0lj.cloudfront.net/covers/300/13/13412.jpg' 
                        }
                    ]
                },
            ]
        },
        {
            žanr: "Superhero",
            kolekcije: [
                {
                    naslov: "Batman",
                    knjige: [
                        { 
                            naslov: 'Batman: Year One', 
                            slika: 'https://m.media-amazon.com/images/I/71uvczzBBcL._AC_UF1000,1000_QL80_.jpg' 
                        },
                        { 
                            naslov: 'Batman: The Killing Joke', 
                            slika: 'https://cdn.ozone.hr/media/catalog/product/b/a/batman-the-killing-joke-komiks.jpg' 
                        },
                        { 
                            naslov: 'Batman: A Death in the Family', 
                            slika: 'https://znanje.hr/product-images/8028d303-ba53-43b1-86d3-fe09ac6debae.jpg' 
                        },
                        { 
                            naslov: 'Batman: The Long Halloween', 
                            slika: 'https://upload.wikimedia.org/wikipedia/en/5/52/Batman_thelonghalloween.jpg' 
                        },
                        { 
                            naslov: 'Batman: Dark Victory', 
                            slika: 'https://media.forbiddenplanet.com/products/110918.jpeg' 
                        },
                    ]
                },
                {
                    naslov: "Spiderman",
                    knjige: [
                        { 
                            naslov: 'The Amazing Spider-man', 
                            slika: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/a0/57addd680690c/clean.jpg' 
                        },
                        { 
                            naslov: 'Spider-Man: The Mutant Agenda', 
                            slika: 'https://m.media-amazon.com/images/I/71vzqjIJhVL._AC_UF1000,1000_QL80_.jpg' 
                        },
                        { 
                            naslov: 'Spider-Man: Birth of Venom', 
                            slika: 'https://libris.to/media/jacket/04160010_spider-man-birth-of-venom.jpg' 
                        },
                    ]
                },
            ]
        }
    ])
</script>

<template>
    <div class="overflow-auto h-full flex flex-col items-center bg-gradient-to-br from-gray-200 via-slate-50 to-stone-300 text-gray-800 py-8 gap-4">
        <div class="text-3xl font-bold">
            Digitalna Knjižnica
        </div>
        <div class="w-full px-48 flex gap-16">        
            <Ormar :police="policaKnjiga" class="w-1/2">
                Knjige
            </Ormar>
            <Ormar :police="policaStripova" class="w-1/2">
                Stripovi
            </Ormar>
        </div>
    </div>
</template>
