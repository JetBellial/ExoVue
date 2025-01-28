<template>
    <h1>TP Réactivité</h1>
    <div class="d-flex justify-content-center align-items-stretch" >
        <button class="bg-success rounded-right" @click="augmenter">+</button>
        <button class="bg-danger rounded-left" @click="augmenterbcp">++</button>
        <p class="bg-primary">Le nombre: {{ nbr }}</p>
    </div>
    <div class="d-flex justify-content-center">
        <p>{{ msg }}</p>
    </div>
    <div class="d-flex justify-content-center">
        <button @click="reset">Remise a zéro</button>
    </div>
</template>
    
<script setup lang='js'>
import {ref, watch} from 'vue'
const msg = ref("")
const nbr = ref(0)
const augmenter = () => nbr.value+=1
const augmenterbcp = () => nbr.value+=10
const reset = () => nbr.value=0

watch(nbr, (newVal) => {
    if(newVal >= 19 && newVal <30){
        msg.value = "Trop haut !"
    } else if(newVal >= 30){
        msg.value = "Non c'est abusé là"
    } else {
        msg.value = ""
    }
});
</script>
    
<style scoped lang="css">
</style>