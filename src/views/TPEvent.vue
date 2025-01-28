<template>
    <h1>TP Event Binding</h1>
    <div class="justify-content-center align-items-stretch">
        <input v-on:input="capterInput($event)" type="text">
        <p>{{ msgdirect }}</p>
        <input @keyup.esc="capterInputIndirect($event)" type="text">
        <p>{{ msgdiffere }}</p>
        <button @click="capterClickEvent($event)">Alert</button>
    </div>
</template>
    
<script setup lang='js'>
import {ref} from 'vue'
const msgdirect = ref('') 
const msgdiffere = ref('') 

function capterInput(event){
    msgdirect.value = event.target.value
    }
function capterInputIndirect(event){
    msgdiffere.value = event.target.value
}
    
function capterClickEvent(event){
    alert('Alerte')
}   
</script>
    
<style scoped lang="css">
</style>