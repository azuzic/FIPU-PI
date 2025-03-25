<script setup>
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
    <ComponentWrapper :data="{newName: newName, names: names}">

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

    </ComponentWrapper>
</template>