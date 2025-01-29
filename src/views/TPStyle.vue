<template>
  <h3 class="text-center titre" :style="{display: selectTitre ? 'none':'block' }">TP Style</h3>

  <div class="container">
    <input v-on:input="capterClass($event)" type="text" name="" id="" />
    <div class="card" :class="{ maClasseHello: selectCard1 }">
      <div class="card-body">
        <h5 class="card-title">Hello World (class dynamique)</h5>
      </div>
    </div>

  <input v-on:input="capterCouleur($event)" type="text" name="" id="" />
  <div class="card maClasseWorld">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
  </div>
  <button v-on:click="selectionTitre()">Afficher le titre</button>
</div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const selectCard1 = ref(false);
const selectTitre = ref(false);

function selectionTitre() {
      selectTitre.value = !selectTitre.value;
  }

function capterClass(event){
    if(event.target.value == 'hello'){
        selectCard1.value = !selectCard1.value;
    } else {
        selectCard1.value = false;
    }
  }
  function capterCouleur(event){
    let maClasseWorld = document.querySelector('.maClasseWorld');
    maClasseWorld.style.backgroundColor = event.target.value;
  }
</script>

<style scoped lang="css">
.maClasseHello {
  background-color: steelblue;
  font-family: Impact;
  color: beige;
}
.maClasseWorld {
  background-color: rgb(200, 0, 255);
  color: chartreuse;
}
</style>
