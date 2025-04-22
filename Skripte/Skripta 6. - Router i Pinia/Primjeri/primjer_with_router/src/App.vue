<script setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="relative min-h-screen bg-gradient-to-br bg-slate-900 from-gray-950 via-purple-950/60 to-cyan-950 p-8 text-white overflow-hidden">

        <div class="max-w-7xl mx-auto">
            
            <RouterView v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </RouterView>
            
        </div>

    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    filter: blur(16px);
}
</style>