<script setup>
    import { ref } from 'vue';
    import useUser from '@/composables/useUser';

    const { 
        login, 
        setRegistration
    } = useUser();

    const signupName = ref('');
    const signupEmail = ref('');
    const signupPassword = ref('');

    const handleSignup = () => {
        login({ name: signupName.value, email: signupEmail.value });
    };
</script>

<template>

    <div class="fixed inset-0 backdrop-blur-sm transition-all flex items-center justify-center p-4 z-5000000 bg-black/50">
        <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">

            <h2 class="text-2xl font-bold mb-4 text-purple-100">Vinylist - Registracija</h2>
            <h3 class="font-bold mb-4 text-slate-400">Molimo unesite podatke:</h3>

            <input v-model="signupName" placeholder="Ime..." 
                class="w-full p-3 mb-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
            <input v-model="signupEmail" placeholder="Email..." type="email" 
                class="w-full p-3 mb-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
            <input v-model="signupPassword" placeholder="Lozinka..." type="password" 
                class="w-full p-3 mb-3 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400">
            
            <div class="flex justify-between items-center">
                <p @click="setRegistration(false)" class="text-sm text-slate-400 hover:text-purple-400 hover:underline cursor-pointer">
                    Već imate račun? Prijavite se...
                </p>
                <button @click="handleSignup" class="px-4 py-2 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg transition-all shadow-lg cursor-pointer
                    hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none" :disabled="!signupName || !signupEmail || !signupPassword">
                    Sign Up
                </button>
            </div>
            
        </div>
    </div>

</template>