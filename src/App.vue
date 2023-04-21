<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/information">Information</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030405;
}

nav {
  
  padding: 40px;
  background-color: darkslategrey;
  border-bottom: 0px solid grey;
}

nav a {
  position: relative;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #091624;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
 
}

nav a.router-link-exact-active {
  color: white;
}
</style>
