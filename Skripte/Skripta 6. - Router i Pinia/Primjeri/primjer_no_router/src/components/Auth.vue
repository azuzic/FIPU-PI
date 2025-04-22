<script setup>
    import useUser from '@/composables/useUser';

    const { 
        userInitials, 
        logout, 
        user
    } = useUser();
</script>

<template>
    <div class="flex items-center h-full z-5000000">
        <div v-if="user" class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold">
                {{ userInitials }}
            </div>
            <button @click="logout()" class="px-2 py-1 text-sm bg-gradient-to-br from-slate-500 to-zinc-700 text-white rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102">
                Odjavi se
            </button>
        </div>
    </div>
</template>