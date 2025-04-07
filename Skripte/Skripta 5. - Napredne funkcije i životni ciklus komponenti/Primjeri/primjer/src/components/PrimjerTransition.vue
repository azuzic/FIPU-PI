<script setup>
    import { ref } from "vue";
    const show = ref(true);
</script>

<template>
    <div class="h-full flex p-8 items-center justify-center">

        <div class="flex gap-2 w-32">
            <input type="checkbox" v-model="show">

            <Transition name="slide-fade">
                <p v-if="show">Animiran tekst</p>
            </Transition>
        </div>

    </div>
</template>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.2s ease-out;
    }
    .slide-fade-leave-active {
        transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>