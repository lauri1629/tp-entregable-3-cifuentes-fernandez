<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
    
  
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
