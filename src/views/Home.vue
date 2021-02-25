<template>
<div id="home">
  <Header />
</div>
</template>

<script>
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Loader from '../components/Loader';

export default {
  name: "Home",
  component: {
    Header,
    Carousel,
    Loader,
  }
  }
  
</script>

<style>

</style>