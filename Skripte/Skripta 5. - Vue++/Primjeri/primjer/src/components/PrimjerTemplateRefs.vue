<script setup>
    import ChildComponent from './ChildComponent.vue';
    import { useTemplateRef } from 'vue'

    const myRef = useTemplateRef('customRef');
    const myChild = useTemplateRef('childRef');

    function ispis() {
        console.log(myRef.value.outerHTML);
    }
</script>

<template>
    <div class="h-full flex p-8 items-center justify-center">

        <div class="h-64">

            <div ref="customRef">
                HELLO
            </div>

            <button @click="console.log($refs.customRef.outerHTML)"
                class="border hover:bg-slate-200 cursor-pointer p-1 rounded mr-2">
                Klikni
            </button>
            <button @click="ispis()"
                class="border hover:bg-slate-200 cursor-pointer p-1 rounded">
                Klikni
            </button>

            <div v-if="myRef">
                {{ myRef.outerHTML }}
            </div>

            <ChildComponent ref="childRef"/>

            <div v-if="myChild">
                myChild.a: {{ myChild.a }}
                myChild.b: {{ myChild.b }}
            </div>

            <button @click="myChild.pozdrav"
                class="border hover:bg-slate-200 cursor-pointer p-1 rounded">
                Klikni
            </button>

        </div>

    </div>
</template>