<template>
    <div>
        <form>
        <label>url de la imagen</label>
        <input type="url" required v-model="publicacion.image"/>
        <label>texto de la imagen</label>
        <input type=text required v-model="publicacion.texto"/>
        <button v-on:click="subirPublicacion(publicacion)">Subir publicacion</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            publicacion:{
            id: 0,
            image: null,
            texto: null,
            likes: 0
        }}
    },
    methods:{
        subirPublicacion(publicacion){
            event.preventDefault();
            console.warn(this.publicacion)
            axios.post('http://localhost:3000/api/publicaciones/agregarPublicacion', publicacion)
        }
    }
}

</script>

<style>

</style>