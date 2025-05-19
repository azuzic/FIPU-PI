<script setup>
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';
import RegistrationGoogle from './components/RegistrationGoogle.vue';
</script>

<template>
    <div class="flex h-full justify-center items-center text-sm bg-gradient-to-b from-sky-100 to-slate-50 gap-4
        flex-wrap px-8">
        <Registration/>
        <Login/>
        <RegistrationGoogle/>
    </div>
</template>