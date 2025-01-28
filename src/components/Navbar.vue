<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/">Accueil</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/link">Link</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/zefjivhzejfgz">Error</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Randomnbr">Random</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Databind">Databind</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Vbind">Vbind</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/Compteur">Compteur</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/EventCatch">EventCatch</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/TPEvent">TPEvent</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/VModel">V-Model</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/ExoBug">Exo Bug</RouterLink>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>