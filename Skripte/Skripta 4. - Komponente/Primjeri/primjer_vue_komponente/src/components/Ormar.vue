<script setup>
    import Polica from "@/components/Polica.vue";
    defineProps(['police'])
</script>
<template>
    <div class="flex flex-col gap-2">
        <p class="text-3xl">
            <slot/>
        </p>
        <div class="h-full flex flex-col">
            <Polica v-for="polica in police"
                :kolekcije="polica.kolekcije">
                {{ polica.žanr }}
            </Polica>
        </div>
    </div>
</template>