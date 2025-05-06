<script setup>
  defineProps(['username'])
</script>
<template>
  <div>
    <nav>
        <RouterLink :to="`/users/${username}/posts`">User posts</RouterLink>
        <RouterLink :to="`/users/${username}/avatar`">User avatar</RouterLink>
    </nav>
    <h1> Korisnik: {{ username }} </h1>
    
    <RouterView />
  </div>
</template>
