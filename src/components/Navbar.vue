<template lang="html">
  <div id="nav">
    <ul class="container">
      <li><router-link to="/Home">Home</router-link></li>
      <li><router-link to="">Games</router-link></li>
      <li><router-link to="">About us</router-link></li>
      <li><router-link to="">Worlds</router-link></li>
      <li><router-link to="/ChampionList">Tabla</router-link></li>
      <li><router-link to="">Contacto</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
  

