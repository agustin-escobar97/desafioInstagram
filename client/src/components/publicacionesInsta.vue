<template>
  <div class="publicacionesEstilo">
    <!--Template para visualizar las publicaciones-->
    <img :src="image" class="publicacionFoto"/>
    <p>{{ text }}</p>
    <a class="anchorLike" href="javascript:void(0);" v-on:click="this.$emit('like',id)"><font-awesome-icon :icon="['fas', 'heart']" /></a>{{ likes }}
    <hr/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "publicacionesInsta",
  props: ["id", "image", "text", "likes"],
  data(){
    return{
  }},
};
</script>

<style src="../styles/sondistagram.css"></style>
