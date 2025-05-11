<script setup>
    defineProps(['username'])
</script>

<template>
    <div>
        
        <RouterLink :to="`/user/${username}/posts`">
            posts
        </RouterLink> <br>
        <RouterLink :to="`/user/${username}/avatar`">
            avatar
        </RouterLink> <br>

        <h1>
            Korisnik {{ username }}
            <RouterView/>
        </h1>

    </div>
</template>