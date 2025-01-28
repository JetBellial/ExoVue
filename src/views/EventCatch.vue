<template>
    <h1>Exo 5: EventCatch</h1>
    <div class="d-flex justify-content-center align-items-stretch" >
        <input v-on:input="capterInput($event)" type="text">
        <button class="bg-primary rounded" @click="capterClickEvent($event)">Envoyer</button>
        <p>{{ msg }}</p>
    </div>
</template>
    
<script setup lang='js'>
import {ref} from 'vue'
const msg = ref('')   

function capterInput(event){
    msg.value = event.target.value
    }

function capterClickEvent(event){
    console.log(event)
}
</script>
    
<style scoped lang="css">
</style>