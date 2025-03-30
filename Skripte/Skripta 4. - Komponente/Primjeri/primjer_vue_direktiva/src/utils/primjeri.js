export const primjeri = [
    { 
        title: "v-html & v-text", 
        code:
`<script setup>
    const sadrzaj = "<span> Ovo je <b>span</b> element </span>";
</script>

<template>
    <div v-html="sadrzaj"> 
    </div>
    
    <div v-text="sadrzaj"> 
    </div>
    
    <div> 
        {{ sadrzaj }}
    </div>
</template>`
    },

    { 
        title: "template syntax > v-text", 
        code:
`<script setup>
    const ime = "Marko";
    const prezime = "Markić";
    const sadrzaj = \`Pozdrav, ja sam \${ime} \${prezime}\`;
</script>

<template>  
    <div v-text="sadrzaj"> 
    </div>
    
    <div> 
        Pozdrav, ja sam {{ime}} {{prezime}}
    </div>
</template>`
    },

    { 
        title: "v-model", 
        code:
`<script setup>
    import { ref } from "vue";

    const unos = ref("");
    const potvrda = ref(false);
</script>

<template>
    <input v-model="unos" type="text" class="border p-1 rounded" placeholder="Upiši nešto...">
    <p><b>Text:</b> {{ unos }}</p> <br>
    
    <label>
        <input type="checkbox" v-model="potvrda">
        Prihvaćam uvjete
    </label>
    <p><b>Potvrda:</b> {{ potvrda ? "Prihvaćeno" : "Odbijeno" }}</p>
</template>`
    },

    { 
        title: "v-bind", 
        code:
`<script setup>
    const slikaURL = "https://www.svgrepo.com/show/179114/painting-painting.svg";
    const link = "https://vuejs.org/guide/essentials/class-and-style.html";
    const disabledDugme = true;
    const stil = {
        color: "red",
        fontSize: "20px"
    };
    const atributi = {
        class: "rounded hover:bg-green-100",
        placeholder: "Upiši text..."
    };
</script>

<template>
    <!-- Vezivanje href atributa -->
    <a :href="link" class="underline hover:text-blue-600" target="_blank">Vue Docs Link</a>
    
    <!-- Vezivanje src atributa -->
    <img :src="slikaURL" class="w-16"> <!-- Kraći zapis -->

    <!-- Vezivanje boolean atributa -->
    <button :disabled="disabledDugme" 
        class="bg-gray-300 p-1 rounded disabled:opacity-25 disabled:cursor-not-allowed">
        Onemogućeno dugme
    </button>

    <!-- Vezivanje stila -->
    <p :style="stil">Ovaj tekst je crven i ima veličinu 20px</p>

    <!-- Vezivanje više atributa odjednom -->
    <input v-bind="atributi" class="border p-2">

    <!-- Dinamička klasa -->
    <div :class="[
            bold, 
            { 'text-rose-700' : hasError}, 
            isActive ? 'border-2 border-orange-400/75 rounded p-1 m-1 w-fit' : ''
        ]">
        Dinamička klasa
    </div>
</template>`
    },

    {
        title: "v-bind use", 
        code:
`<script setup>
    import { ref } from "vue";

    const size = ref("24");
    const selected = ref(false);
    const style = ref("");
</script>

<template>
    <input type="range" min="12" max="36" v-model="size"/>
    <div :style="\`font-size: $\{size}px;\`">
        font-size: {{size}}px
    </div>
    
    <input type="checkbox" v-model="selected" class="mr-2"/> 
    <span :class="selected ? 'opacity-100 text-green-700': 'opacity-50 text-red-700'">
        {{selected}}
    </span>

    <br>
    <textarea class="border" type="text" :style="style" v-model="style" :rows="8"/>
</template>`
    },

    {
        title: "v-if, v-else, v-else-if", 
        code:
`<script setup>
    import { ref } from "vue";

    const broj = ref(6)
    const prikazi = ref(false)
</script>

<template>
    <b>Prikaži:</b> <input type="checkbox" v-model="prikazi">

    <div v-if="prikazi">
        Hello!
    </div>

    <br/><br/>

    <b>Broj:</b> <input type="number" v-model="broj" class="border p-1 rounded">

    <div v-if="broj%2==0 && broj%3==0">
        Broj {{ broj }} je djeljiv sa 2 i 3
    </div>
    <div v-else-if="broj%2==0">
        Broj {{ broj }} je djeljiv 2
    </div>
    <div v-else-if="broj%3==0">
        Broj {{ broj }} je djeljiv 3
    </div>
    <div v-else>
        Broj {{ broj }} <b>nije</b> djeljiv sa 2 i 3
    </div>
</template>`
    },

    {
        title: "v-show",
        code:
`<script setup>
    import { ref } from "vue";
    
    const hide = ref(false);
    const element = ref();

    function dohvati(id) {
        element.value = document.getElementById(id);
    }
</script>

<template>
    Sakrij: <input type="checkbox" v-model="hide">

    <div id="div_if" v-if="!hide">
        Element sakriven sa v-if
    </div>

    <div id="div_show" v-show="!hide">
        Element sakriven sa v-show
    </div>
    
    <div class="flex gap-2">
        <button @click="dohvati('div_if')" 
            class="p-1 bg-sky-200 hover:bg-green-200 rounded cursor-pointer">
            Dohvati element sakriven sa v-if
        </button>

        <button @click="dohvati('div_show')"
            class="p-1 bg-sky-200 hover:bg-green-200 rounded cursor-pointer">
            Dohvati element sakriven sa v-show
        </button>
    </div>

    <div>
        <b>Element:</b> {{ element ? element.outerHTML : 'null' }}
    </div>
</template>`
    },

    { 
        title: "v-for", 
        code:
`<script setup>
    import { ref } from "vue";

    const items = ref([
        "banana",
        "jabuka",
        "kruška",
        "lubenica",
        "limun"
    ]);
</script>

<template>
    <li v-for="item in items">
        {{ item }}
    </li>
</template>`
    },

    { 
        title: "v-for with index", 
        code:
`<script setup>
    import { ref } from "vue";

    const items = ref([
        "banana",
        "jabuka",
        "kruška",
        "lubenica",
        "limun"
    ]);
</script>

<template>
    <li v-for="(item, index) in items">
        {{ index }} - {{ item }}
    </li>
</template>`
    },

    { 
        title: "v-for & v-if", 
        code:
`<script setup>
    import { ref } from "vue";

    const brojevi = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>

<template>
    <h2>Parni brojevi:</h2>
    
    <div v-for="broj in brojevi">
        <div v-if="broj % 2 === 0">
            - {{ broj }}
        </div>
    </div>
</template>`
    },

    { 
        title: "v-for | list of objects", 
        code:
`<script setup>
    import { ref } from "vue";

    const korisnici = ref([
        { ime: "Ivan", prezime: "Horvat", godine: 25 },
        { ime: "Ana", prezime: "Kovač", godine: 30 },
        { ime: "Marko", prezime: "Babić", godine: 22 }
    ]);
</script>

<template>
    <ul>
        <li v-for="korisnik in korisnici">
            {{ korisnik.ime }} {{ korisnik.prezime }} - {{ korisnik.godine }} godina
        </li>
    </ul>
</template>`
    },

    { 
        title: "v-for | object", 
        code:
`<script setup>
    import { ref } from "vue";

    const korisnik = ref(
        { ime: "Ivan", prezime: "Ivanić", godine: 25 },
    );
</script>

<template>
    <ul>
        <li v-for="(value, key, index) in korisnik">
            {{index}} > <b>{{ key }}:</b> {{ value }}
        </li>
    </ul>
</template>`
    },

    { 
        title: "v-for | range", 
        code:
`<template>
    <li v-for="n in 5">{{ n }}</li>
</template>`
    },

    { 
        title: "v-for | nested", 
        code:
`<script setup>
    import { ref } from "vue";

    const kategorije = ref([
        { naziv: "Voće", proizvodi: ["Jabuka", "Banana", "Jagoda"] },
        { naziv: "Povrće", proizvodi: ["Mrkva", "Krumpir", "Rajčica"] },
    ]);
</script>

<template>
    <div class="flex gap-8">
        <div v-for="kategorija in kategorije">
            <b>{{ kategorija.naziv }}</b>
            <hr class="my-1">
            <p v-for="proizvod in kategorija.proizvodi" class="text-sm">
                - {{ proizvod }}
            </p>
        </div>
    </div>
</template>`
    },

    { 
        title: "v-for | filter", 
        code:
`<script setup>
    import { ref } from "vue";

    const ucenici = ref([
        { ime: "Ana", bodovi: 85 },
        { ime: "Marko", bodovi: 92 },
        { ime: "Petra", bodovi: 78 },
        { ime: "Ivan", bodovi: 60 }
    ]);

    const minBodovi = ref(70);

    function sortirajPoBodovima(ulazno) {
        ucenici.value.sort((a, b) => ulazno ? b.bodovi - a.bodovi : a.bodovi - b.bodovi);
    }
</script>

<template>
    <label>
        Minimalan broj bodova:
        <input type="number" v-model="minBodovi" class="border p-1 rounded">
    </label>

    <button @click="sortirajPoBodovima(true)" 
        class="ml-2 p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
        Sortiraj Uzlazno
    </button>

    <button @click="sortirajPoBodovima(false)" 
        class="ml-2 p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
        Sortiraj Silazno
    </button>

    <div v-for="ucenik in ucenici.filter(u => u.bodovi >= minBodovi)">
        <b>{{ ucenik.ime }}</b> - {{ ucenik.bodovi }} bodova
    </div>
</template>`
    },

    { 
        title: "v-for | mutate", 
        code:
`<script setup>
    import { ref } from "vue";

    const newName = ref('')

    const names = ref([
        "Ana",
        "Marko",
        "Petra",
        "Ivan"
    ]);
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <input type="text" v-model="newName" class="border px-1 w-32 rounded" placeholder="Novo ime...">
        <button @click="names.push(newName)"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            push()
        </button>
        <button @click="names.pop()"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            pop()
        </button>
        <button @click="names.unshift(newName)"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            unshift()
        </button>
        <button @click="names.shift()"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            shift()
        </button>
        <button @click="names.reverse()"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            reverse()
        </button>
        <button @click="names.sort()"
            class="p-1 bg-blue-200 hover:bg-green-200 cursor-pointer rounded">
            sort()
        </button>
    </div>

    <hr class="my-2">

    <div class="flex flex-col gap-1 text-sm">
        <div v-for="(name, index) in names" class="px-1 rounded w-fit">
            <b>{{index}}.</b> {{ name }}
        </div>
    </div>
</template>`
    },

    {
        title: "v-pre & v-once", 
        code:
`<script setup>
    import { ref } from 'vue';

    const text = ref("Lorem ipsum")
</script>

<template>
    <input type="text" v-model="text" class="border px-1 rounded">

    <div>
        <b>Normal:</b> {{ text }}
    </div>

    <div v-once>
        <b>v-once:</b> {{ text }}
    </div>

    <div v-pre>
        <b>v-pre:</b> {{ text }}
    </div>
</template>`
    },

]