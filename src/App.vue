<template>
  
  <NavbarComp/>
  
<router-view/>
<FooterComp/>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp, 
    FooterComp
  }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030405;
}

</style>
