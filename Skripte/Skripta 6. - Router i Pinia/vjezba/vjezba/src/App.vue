<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  console.log("Uspješna prijava!");
  router.go(-3)
}

</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <br>
  <RouterLink :to="{ name: 'opisna stranica' }">About</RouterLink>
  <br>
  <RouterLink :to="{ name: 'user', params: { username: 'ivan' } }">
    User
  </RouterLink>
  <br>
  <RouterLink to="/apple">Apple</RouterLink>

  <br>

  <button @click="login()">
    LOGIN
  </button>

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
.v-leave-active {
transition: opacity 0.5s ease;
position: absolute;
}
.v-enter-active {
transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
opacity: 0;
}
</style>