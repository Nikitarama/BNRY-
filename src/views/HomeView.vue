<template>
  <div class="articles">
    <h1>BNRY News</h1>
    <h2>Get the most current news stories and information here</h2>
     
    <RouterLink :to= "{name: 'information'}">
    <button class="browse">Browse Stories</button>
  </RouterLink>
  </div>
  
  <div v-if="articles.length = 3" class="news-cards">
    <div class="row container-fluid">
    <h2>Top stories</h2>
    
      <div class="card col-3" v-for="article in articles"
        :key="article.id">
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

.articles h1 {
  position: relative;
  font-size: 70px;
  font-weight: 400;
  border-bottom: 2px solid white;
  width: 50rem;
  left: 17rem;
  margin-bottom: 30px;
  top: 15rem;
  font-family: 'Hepta Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030405;
}

 h2, h1 {
  font-weight:lighter;
  text-align: center;
  color: #030405;
}

h2 {
  position: relative;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  top: 13rem;
  left: 0rem;
  color: white;
}
.row h2 {
  margin-left: 3rem;
}
.browse {
  position: relative;
  left: 37.5rem;
  top: 18rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 3px solid #48768A;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0px 9px black;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
}

.browse:hover {
  color: white;
  box-shadow: 0 0px 2px black;
  background-color:#48768A;
}

.card {
  margin-left: 1.5rem;
  margin-top: 11px;
  margin-bottom: 11px;
  width: 26rem;
  box-shadow: 0 0px 4px black;
  background-color: #ffffffd7;
}

.author, .published {
  font-size: 12px;
  position:relative;
  top: 1rem;
}

.description {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}

.news-cards h2 {
  position: relative;
  color: white;
  top: -1.5rem;
  left: -2rem;
}

.news-cards {
  position: relative;
  text-align: center;
  z-index: -1;
  padding-top: 3rem;
  padding-bottom: 5rem;
  margin-bottom: -2rem;
  top: 3rem;
  background-color: #74919b;
}

@media only screen and (max-width: 1080px) {
  .news-cards {
    position: relative;
    right: 10rem;
    width: 100%;
    background-size: contain;
  }
  .row h1 {
    position: relative;
    left: 20rem;
  }
  
  .card {
    position: relative;
    left: 10rem;
    width: 17rem;
    display: flex;
    justify-content: center;
  }

  .articles {
    width: 57.5rem;
  }
  .articles h2 {
    width: 40rem;
    position: relative;
    left: 20rem;
  }
  .articles h1 {
    position: relative;
    right: 20rem;
  }
}
</style>
