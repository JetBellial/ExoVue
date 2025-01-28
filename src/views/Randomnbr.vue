<template>
  <h1>Chiffre random</h1>
  <button v-on:click="random">Generer un chiffre random</button>
  
  <p>{{ titre }}</p>
</template>

<script setup lang='js'>
import { ref } from 'vue'
let titre= ref('aucun')
let nbr = ref(0)
let random = () =>  {
  nbr.value = Math.floor(Math.random() * 100)
  if(nbr.value <= 50){
    titre.value = 'Le livre de la jungle'
  } else {
    titre.value = 'Le roi lion'
  }
}
  


</script>

<style scoped lang="css">
</style>