<template>

  <div>
    <navInsta></navInsta>
    
    <div class="containerPublicaciones">
    <publicacionesInsta v-for="publicacion in publicaciones"
    v-bind:key="publicacion.id"
     :id="publicacion.id"
     :image="publicacion.image"
     :texto="publicacion.texto"
     :likes="publicacion.likes"
     >

     </publicacionesInsta>
     </div>

  </div>
<subirPublicacion></subirPublicacion>
</template>

<script>
import axios from 'axios'

import navInsta from './navInsta'
import publicacionesInsta from './publicacionesInsta'
import subirPublicacion from './subirPublicacion'

export default {
  name: 'App',
  components: {
    navInsta,
    publicacionesInsta,
    subirPublicacion
  },
  data(){
    return{
      publicaciones: [],
    }
  },
  methods:{
    obtenerPublicaciones(){
      axios.get("http://localhost:3000/api/publicaciones").then((respuesta)=>this.publicaciones=respuesta.data)
    }
  },
  mounted(){
    this.obtenerPublicaciones()
    }
  }

</script>

<style>

</style>