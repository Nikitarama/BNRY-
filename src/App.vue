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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030405;
}

nav {
  position: relative;
  padding: 40px;
  background-color: #48768A;
  border-bottom: 0px solid darkslategrey;
  box-shadow: 0 0px 10px black;
  text-align: left;
}

nav a {
  left: 33.5rem;
  position: relative;
  font-weight: 500;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #091624;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  
}

nav a.router-link-exact-active {
  color: white;
}
</style>
