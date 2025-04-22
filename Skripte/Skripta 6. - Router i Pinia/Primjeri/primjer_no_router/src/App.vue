<script setup>
    import LogIn from '@/components/LogIn.vue';
    import Collection from '@/components/Collection.vue';
    import SignUp from '@/components/SignUp.vue';
    import useUser from '@/composables/useUser';
    
    const { 
        registration, 
        user, 
    } = useUser();
</script>

<template>
    <div class="relative min-h-screen bg-gradient-to-br bg-slate-900 from-gray-950 via-purple-950/60 to-cyan-950 p-8 text-white overflow-hidden">

        <div class="max-w-7xl mx-auto">
            
            <Transition>

                <Collection v-if="user"/>

                <LogIn v-else-if="!registration"/>

                <SignUp v-else/>

            </Transition>
            
        </div>
    </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    filter: blur(16px);
}
</style>