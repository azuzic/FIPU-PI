<script setup>
    import Kolekcija from "@/components/Kolekcija.vue";
    defineProps(['kolekcije'])
</script>

<template>
    <div class="flex flex-col w-full pt-4 rounded-xl"
        style="background-image: url(https://i.pinimg.com/originals/b9/ea/4e/b9ea4e526fb0fc0fd8038ac713fbb881.jpg)">
        <div class="flex gap-8 px-8 pt-8">
            <Kolekcija v-for="kolekcija in kolekcije"
                :kolekcija="kolekcija"/>
        </div>
        <div class="flex items-center bg-orange-950 rounded-lg text-orange-100 text-xl px-8 py-1">
            <slot/>
        </div>
    </div>
</template>