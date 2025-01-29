<template>
    <h3 class="text-center titre">WatchList</h3>
    <div class="container d-flex justify-content-center align-items-stretch">
      <input v-model="film" type="text" name="" id=""  />
      <button v-on:click="ajouterFilm" class="btn btn-primary ">Ajouter un film à la liste</button>
    </div>
    <div>
        <ul>
            <li v-if="mesFilms == 0">Pas de Films</li>
            <li v-for="film in mesFilms" :key="film">{{ film }}</li>
        </ul>
    </div>
    <div>
        <button v-on:click="viderListe">Vider la liste</button>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue'
  const mesFilms = ref([]);
  const film = ref('');

    function ajouterFilm(){
        mesFilms.value.push(film.value);
        film.value = '';
    }
    function viderListe(){
        mesFilms.value = [];
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
  