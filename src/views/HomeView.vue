<template>
  <div class="articles">
    <h1>BNRY News</h1>
    <h2>We have the most current news and information<br> from worldwide tech companies</h2>
     
    <RouterLink :to= "{name: 'information'}">
    <button class="more">Browse Stories</button>
  </RouterLink>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>

.articles {
  background-image: url(https://i.postimg.cc/wBYrf4Nn/3096920-blur-blurry-bright-close-up-depth-of-field-fingers-focus-news-newspaper-paper-person-reading.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

h1 {
  position: relative;
  font-size: 70px;
  font-weight: bold;
  border-bottom: 4px solid white;
  width: 500px;
  margin-left: 30rem;
  margin-bottom: 30px;
  top: 8rem;
  text-shadow: 0 0 9px darkcyan;
}

h2, h1 {
  
  font-family:Georgia, 'Times New Roman', Times, serif;
}

h2 {
  position: relative;
  font-weight:lighter;
  top: 8rem;
  color: black;
}

.more {
  position: relative;
  
  top: 10rem;
  background-color: slategrey;
  border: 0px solid grey;
  border-radius: 13px;
  padding: 10px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.more:hover {
  color: white;
  background-color: darkslategrey;
}

</style>
