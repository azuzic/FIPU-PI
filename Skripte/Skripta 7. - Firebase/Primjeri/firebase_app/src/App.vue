<script setup>
import AuthStateChange from './components/AuthStateChange.vue';
import ChangeEmail from './components/ChangeEmail.vue';
import ChangePassword from './components/ChangePassword.vue';
import DeleteUser from './components/DeleteUser.vue';
import EmailVerification from './components/EmailVerification.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import ReAuth from './components/ReAuth.vue';
import ReAuthGoogle from './components/ReAuthGoogle.vue';
import Registration from './components/Registration.vue';
import RegistrationGoogle from './components/RegistrationGoogle.vue';
import ResetPassword from './components/ResetPassword.vue';
</script>

<template>
    <div class="h-full flex items-center-safe justify-center-safe my-auto p-8 overflow-auto
        bg-gradient-to-b from-sky-100 to-slate-50 text-sm">
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Registration/>
            <Login/>
            <RegistrationGoogle/>
            <AuthStateChange/>
            <Logout/>
            <ReAuth/>
            <ReAuthGoogle/>
            <EmailVerification/>
            <ChangePassword/>
            <ResetPassword/>
            <ChangeEmail/>
            <DeleteUser/>
        </div>
    </div>
</template>