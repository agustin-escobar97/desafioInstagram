/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <body>
      <header>
        <nav class="navBar">
          <div class="container">
            <div>
              <img src="../assets/instagramtext.png" alt="instagram" class="logo"/>
            </div>
            <div class="caja-busqueda"><input type="text" /></div>
            <div class="botones">
              <a class="botones-iconos"><font-awesome-icon :icon="['fas', 'house']" /></a>
              <a class="botones-iconos"><font-awesome-icon :icon="['fab', 'facebook-messenger']" /></a>
              <a href="#" class="botones-iconos"><font-awesome-icon :icon="['fas', 'square-plus']" /></a>
              <a class="botones-iconos"><font-awesome-icon :icon="['fas', 'compass']" /></a>
              <a class="botones-iconos"><font-awesome-icon :icon="['fas', 'heart']" /></a>
              <a><img src="../assets/pfp.jpg" alt="" class="pfp" /></a>
            </div>
          </div>
        </nav>
        <hr />
      </header>
    </body>
  </div>
</template>

<script></script>

<style src="../styles/sondistagram.css"></style>
