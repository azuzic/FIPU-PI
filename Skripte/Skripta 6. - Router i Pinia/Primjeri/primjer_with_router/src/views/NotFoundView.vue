<script setup lang="ts">
import Vinyl from '@/components/Vinyl.vue';

</script>

<template>
    <div class="flex flex-col w-full items-center justify-center 
        h-full fixed -top-1/2 right-1/2 translate-1/2 text-center max-w-2xl">
        <!-- Animated vinyl record -->
        <div class="relative h-64 w-64 ml-8">
            <Vinyl class="animate-spin-slow">
                <div class="absolute top-1/2 translate-1/2 bg-purple-600/50 w-full 
                    h-2 -left-1/2 -mt-2 z-50">

                </div>
            </Vinyl>
        </div>

        <h1 class="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">404</h1>
        <h2 class="text-3xl font-semibold mb-6">Stranica ne postoji</h2>
        <p class="text-xl text-gray-300 mb-8">Čini se da ste završili na krivoj stranici.
            <br>
            Stranica koju tražite je ili uklonjena ili ne postoji.</p>

        <RouterLink to="/" class="px-4 py-2 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg transition-all shadow-lg cursor-pointer
            hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">            
            Vrati se na početnu
        </RouterLink>
    </div>
</template>

<style>
.animate-spin-slow {
    animation: spin 8s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>