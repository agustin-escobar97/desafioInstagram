
<template>
  <!--Template principal-->
  <div>
    <navInsta></navInsta>
    
    <div class="containerPublicaciones">
    <publicacionesInsta v-for="publicacion in publicaciones"
     :key="publicacion.id"
     :id="publicacion.id"
     :image="publicacion.image"
     :text="publicacion.text"
     :likes="publicacion.likes"
     v-on:like="like"
     >

     </publicacionesInsta>
     </div>

    <subirPublicacion

      ></subirPublicacion>
  </div>
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
      axios.get("http://localhost:3000/api/publicaciones").then((resp)=>{
        this.publicaciones = resp.data
      })
    },
    like(id) {
      axios.put("http://localhost:3000/api/publicaciones/darLike/" + id).then((resp)=>{
        this.publicaciones[id-1].likes = resp.data.likes
      })
   }
  },
  mounted(){
    this.obtenerPublicaciones()
    }
  }

</script>

<style>

</style>