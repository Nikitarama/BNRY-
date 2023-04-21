<template>
  <div class="articles">
    <h1>Get the latest news</h1>

    <!-- <table class="table table-striped table-dark table-hover">
      <thead>
    <tr>
   
      <th scope="col">Author</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">URL</th>
      <th scope="col">Image</th>
      <th scope="col">Published</th>
      <th scope="col">Content</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="article in articles" :key="article.id">
      <th scope="row"></th>
     
      <td>{{ article.author}}</td>
      <td>{{ article.title}}</td>
      <td>{{ article.description}}</td>
      <td>{{ article.url}}</td>
      <td><img :src= "article.urlToImage"></td>
      <td>{{ article.publishedAt}}</td>
      <td>{{ article.content}}</td>
    </tr>
    
  </tbody>
</table> -->
<br>
<div class="search-bar">
    <label for="search">Search articles</label>
    <input type="search" id="search">
  </div>
  <br>
<div class="news-cards">
  <div class="row container-fluid">
    
      <div class="card col-5" v-for="article in articles"
        :key="article.id">
        <div class="header"></div>
        <h4 class="name">{{ article.title }}</h4>
        <img :src = "article.urlToImage">
        
        <p class="description">{{ article.description}}</p>
      <div class="published"> {{ article.publishedAt }}</div>
       <br> 
      <p class="content">{{ article.content}}</p>
      <a :href= "article.url"><button class="more">See more</button></a> 
        <p class="author">Authored by: {{ article.author}}</p>
        
        
        
      </div>
      
  </div>
  </div>

        <!-- <h2>Articles:</h2> -->
          <!-- <div class="carousel" v-for= "article in articles" :key="article.id">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img :src= "article.urlToImage" style="height: 300px; width: 100px;" class="d-block rounded mx-auto d-block w-75" alt="CapeTown">
                  </div> -->
                  <!-- <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/QMFcdkdv/t30earlyarisakas.jpg" style="height: 300px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://i.postimg.cc/HLt1j5v4/61v-JFg5wuq-L-AC-UF1000-1000-QL80.jpg" style="height: 300px;" class="d-block rounded mx-auto d-block w-75" alt="...">
                  </div> -->
<!--                   
            </div>-->
          <!-- </div>

        </div> -->
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

#search {
  position: relative;
  border-radius: 10px;
  width: 40rem;
  border: 2px solid grey;
}

input [type=search] {
  position: relative;
  left: 23rem;
  bottom: 4rem;
}

.card {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px black;
  padding: 10px;
  margin: 20px;
  margin-left: 5rem;
}

.articles h1 {
 
  color: white;
  margin-top: 40px;
  box-shadow: 0px 0px 10px black;
  font-size: 40px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 1px solid darkgrey;
  background-color: darkslategray;
}

.more {
  background-color: darkslategray;
  color: white;
  border-radius: 20px;
  border: 1px solid grey;
  padding: 5px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.more:hover {
  background-color: white;
  color: darkslategrey;
  border: 1px solid grey;
}

.articles {
  /* background-image: url(https://i.postimg.cc/SxCnmssX/filip-mishevski-c5-Qd-Mcu-Flg-Y-unsplash.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
  
}
.name {
  border-bottom: 1px solid lightgrey;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
}

.published {
  font-size: 11px;
}

.content {
  
  font-weight: bold;
  font-size: 18px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}

.author {
  padding-top: 3rem;
  font-size: 17px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.description{
  font-size: 12px;
}
</style>
