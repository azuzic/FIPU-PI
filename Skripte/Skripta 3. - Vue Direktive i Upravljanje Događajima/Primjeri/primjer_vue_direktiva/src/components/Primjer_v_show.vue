<script setup>
    import { ref } from "vue";
    
    const hide = ref(false);
    const element = ref();

    function dohvati(id) {
        element.value = document.getElementById(id);
    }
</script>

<template>
    <ComponentWrapper :data="{hide: hide, element: element}">

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

    </ComponentWrapper>
</template>