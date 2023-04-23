<template>
  <div class="articles">
    <h1>BNRY News</h1>
    <h2>Get the most current news stories and information here</h2>
     
    <RouterLink :to= "{name: 'information'}">
    <button class="more">Browse Stories</button>
  </RouterLink>
  </div>
  
  <div v-if="articles.length = 8" class="news-cards">
   <h2>Top stories</h2>
  <div class="row container-fluid">
    
      <div class="card col-3" v-for="article in articles"
        :key="article.id">
        <div class="header"></div>
        <h5 class="name">{{ article.title }}</h5>
        <img :src = "article.urlToImage">
        
        <p class="description">{{ article.description}}</p>
      <div class="published"> {{ article.publishedAt }}</div>
        <p class="author">Authored by: {{ article.author}}</p>
        
        
        
      </div>
      
  </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchArticles");
    const articles = computed(() => store.state.articles);
    return {
      articles,
    };
  },
};
</script>

<style scoped>

.articles {
  position: relative;
  top: 3rem;
  background-image: url(https://i.postimg.cc/4xvg2wXQ/22a74c4d5d62e6551c468b384fad881b.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0px 10px black;
  height: 100vh;
}

h1 {
  position: relative;
  font-size: 70px;
  font-weight: 700;
  border-bottom: 2px solid white;
  width: 50rem;
  left: 17rem;
  margin-bottom: 30px;
  top: 15rem;
  font-family: 'Hepta Slab', serif;
}

h2, h1 {
  
  font-weight:lighter;
}

h2 {
  position: relative;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  top: 13rem;
  left: 0rem;
  color: white;
}

.more {
  position: relative;
  right: 2rem;
  top: 15rem;
  background-color: #48768A;
  border: 0px solid grey;
  border-radius: 13px;
  padding: 10px;
  box-shadow: 0 0px 10px black;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.more:hover {
  color: white;
  box-shadow: 0 0px 0px black;
  background-color: darkslategrey;
}

.card {
  margin-left: 11.2px;
  margin-top: 11px;
  margin-bottom: 11px;
  width: 20rem;
  box-shadow: 0 0px 4px black;
  background-color: #ffffffd7;
}

.author, .published {
  font-size: 12px;
  position:relative;
  top: 1rem;
}

.news-cards h2 {
  position: relative;
  color: white;
  top: -1.5rem;
  left: -2rem;
}

.news-cards {
  position: relative;
  z-index: -1;
  padding-top: 4rem;
  padding-bottom: 5rem;
  margin-bottom: -2rem;
  top: 3rem;
  background-color: #74919b;
}

</style>
