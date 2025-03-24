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
        title: "v-bind2", 
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
        title: "v-for", 
        code:
``
    },

    { 
        title: "v-on", 
        code:
``
    },

    {
        title: "v-pre & v-once", 
        code:
``
    },

    {
        title: "v-slot", 
        code:
``
    },

]