<template>
    <h1>TP DataBinding - Profil User</h1>
    <div>
        <img :src="user.src">
        <p>{{ user.nom }}</p>
        <input :value="user.nom.value">
        <p>{{ user.ages }} ans</p>
        <p>Age + 10 : {{ user.age2() }} ans</p>
        <h2>NB fétiche : {{ user.rdm() }}</h2>
    </div>
</template>
    
<script setup lang='js'>
import {ref} from 'vue'
    const user = {
        nom: ref('Dr.Mario'),
        ages: ref(45),
        src: "https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg",
        age2:  () => user.ages.value + 10,
        rdm: () => Math.random()
    }
</script>
    
<style scoped lang="css">
</style>