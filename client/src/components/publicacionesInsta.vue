<template>
<!--Template para visualizar las publicaciones-->
  <div></div>
  <div class="publicacionesEstilo">
    <img :src="image" class="publicacionFoto"/>
    <p>{{ text }}</p>
    <p><font-awesome-icon :icon="['fas', 'heart']" />{{ likes }}</p>
    <button v-on:click="darLike(id)">Me gusta</button>
    <hr/>
  </div>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "publicacionesInsta",
  props: ["id", "image", "text", "likes"],
  data(){
    return{
      updatedLikes:{}
  }},
  methods: {
    darLike(id) {
      axios.put("http://localhost:3000/api/publicaciones/darLike/" + id)
      console.log(axios.get("http://localhost:3000/api/publicaciones/" + id))
    }
    }
};
</script>

<style src="../styles/sondistagram.css"></style>
