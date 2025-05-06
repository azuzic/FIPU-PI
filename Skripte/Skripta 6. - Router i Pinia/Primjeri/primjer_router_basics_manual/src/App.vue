<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'

  const router = useRouter()

  function goToUserAna() {
    router.push({ path: '/users/ana' })
  }
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'user', params: { username: 'ivan' } }">User</RouterLink>
        <button @click="goToUserAna()"> User Ana </button>
    </nav>

    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </RouterView>
</template>

<style>
a.router-link-active {
  color: blue;
}
a.router-link-exact-active {
  color: red;
}
a {
  color: black;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid black;
}

.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
