<script setup>
import ListItem from './components/ListItem.vue';
import { ref } from "vue"

const fruitList = ref([
    {
        name: "Jabuka",
        icon: "noto:red-apple"
    },
    {
        name: "Banana",
        icon: "noto:banana"
    },
    {
        name: "Trešnja",
        icon: "noto:cherries"
    },
    {
        name: "Kruška",
        icon: "noto:pear"
    },
    {
        name: "Breskva",
        icon: "noto:peach"
    }
]);
const vegetableList = ref([
    {
        name: "Mrkva",
        icon: "noto:carrot"
    },
    {
        name: "Brokula",
        icon: "noto:broccoli"
    },
    {
        name: "Paprika",
        icon: "noto:bell-pepper"
    },
    {
        name: "Grašak",
        icon: "noto:pea-pod"
    },
    {
        name: "Rotkvica",
        icon: "noto:root-vegetable"
    }
]);
</script>

<template>
    <div class="p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-xl font-bold mb-4 text-center">
            Lista voća
        </h2>
        <ul class="space-y-2">
            <ListItem v-for="item in fruitList" 
                :name="item.name" :icon="item.icon"/>
        </ul>
    </div>
    
    <div class="p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-xl font-bold mb-4 text-center">
            Lista povrća
        </h2>
        <ul class="space-y-2">
            <ListItem v-for="item in vegetableList" 
                :name="item.name" :icon="item.icon"/>
        </ul>
    </div>
</template>

