<template>
    <h1>Exo 4: Compteur</h1>
    <div class="d-flex justify-content-center align-items-stretch" >
        <button class="bg-danger rounded-left" @click="reduire">-</button>
        <p class="bg-primary">Le nombre: {{ nbr }}</p>
        <button class="bg-success rounded-right" @click="augmenter">+</button>
    </div>
    <div class="d-flex justify-content-center">
        <button @click="reset">Remise a zéro</button>
    </div>
</template>
    
<script setup lang='js'>
import {ref} from 'vue'
const nbr = ref(0);
const augmenter = () => nbr.value+=10
const reduire = () => nbr.value-=44
const reset = () => nbr.value=0
</script>
    
<style scoped lang="css">
</style>