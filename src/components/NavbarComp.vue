<template>
     <nav>
      
    <router-link to="/">Home |</router-link> <br>
    <router-link to="/information">Information</router-link> 
  </nav>
 
  <router-view/>

</template>

<style scoped>
nav {
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 40px;
  background-color: #48768A;
  border-bottom: 0px solid darkslategrey;
  box-shadow: 0 0px 10px black;
  text-align: left;
}

nav a {
  left: 35rem;
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

@media only screen and (max-width: 1080px){
  nav {
    width: 57.5rem;
  }

}

</style>