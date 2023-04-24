<template>
  
    <div class="articles">
      
        <h1 class="head">Search for the Top news stories</h1>

        <form @submit.prevent class="search-bar">
          <label for="search" class="label">Search articles</label>
          <input type="text" v-model="searchQuery" id="search" />
        </form>
    
      <div class="cards">
        <div v-if="(articles.length = 6)" class="news-cards">
          <div class="row container-fluid">
            <div
              class="card col-3"
              v-for="article in filtered"
              :key="article.id"
            >
              <div class="header"></div>
              <h4 class="name">{{ article.title }}</h4>
              <img :src="article.urlToImage" />

              <div class="published">{{ article.publishedAt }}</div>
              <br />
              <p class="content">{{ article.content }}</p>
              <a :href="article.url"><button class="more">See more</button></a>
              <p class="author">Authored by: {{ article.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },

  setup() {
    const store = useStore();
    store.dispatch("fetchArticles");
    const articles = computed(() => store.state.articles);
    return {
      articles,
    };
  },

  computed: {
    filtered: function () {
      return this.articles.filter((article) => {
        return article.content
          .toLowerCase()
          .match(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>

#search {
  position: relative;
  border-radius: 40px;
  margin-bottom: 3rem;
  width: 40rem;
  border: 3px solid grey;
  color: white;
  margin-left: 1rem;
  padding: 5px;
  background-color: rgba(109, 109, 109, 0.486);
}
.search-bar {
  position: relative;
  left: 14rem;
  top: 1.5rem;
  color: white;
}

input [type="search"] {
  position: relative;
  left: 21rem;
  bottom: 4rem;
}
.card {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 10px black;
  padding: 10px;
  margin: 20px;
  margin-left: 5rem;
  text-align: center;
}
.card:hover {
  box-shadow: 0 0px 4px black;
}
.articles h1 {
  position: relative;
  top: 3rem;
  left: 25rem;
  margin-bottom: 3rem;
  width: 31rem;
  padding-inline: 3rem;
  color: white;
  -webkit-text-stroke-width: 0.001cm;
  font-size: 40px;
  font-family: "Hepta Slab", serif;
  text-align: left;
}

.more {
  border: 0px solid grey;
  color: darkslategrey;
  border-radius: 15px;
  background-color: rgba(455, 455, 455, 0.5);
  padding: 9px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.more:hover {
  background-color: #48768a;
  color: white;
  border: 0px solid grey;
  box-shadow: 0px 0px 100px 0px black;
}
.articles {
  background-image: url(https://i.postimg.cc/Cx0X9ZHV/6b50bdfe3efb25aca023a72834f01c16.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  height: 270vh;
  object-fit: cover;
  position: relative;
  top: 8rem;
}
.name {
  border-bottom: 0px solid lightgrey;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
}
.published {
  font-size: 11px;
}
.content {
  font-weight: bold;
  font-size: 18px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.author {
  padding-top: 3rem;
  font-size: 17px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

@media only screen and (max-width: 1080px) {
  .news-cards {
    position: relative;
    left: 30rem;
    width: 100%;
    background-size: contain;
  }
  .card {
    position: relative;
    right: 17rem;
    width: 20rem;
    display: flex;
    justify-content: center;
  }
  .articles {
    height: 340vh;
    position: relative;
    right: 10rem;
  }
  .search-bar {
    position: relative;
    right: 20rem;
  }
}

</style>
