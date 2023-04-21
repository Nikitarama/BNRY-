import { createStore } from 'vuex';
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
import axios from 'axios';
import router from "../routes/index";
const articlesURL ='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aed654939b3540588c898f58df96e6c3'; 

export default createStore({
  state: {
    articles:null,
  },
  getters: {
    articles(state){
      return state.articles
    }
  },

  mutations: {
  
    setArticles(state, articles){
      state.articles = articles;
    }
  },
  actions: {
    async fetchArticles(context){
      const res = await axios.get(`${articlesURL}`);
     console.log(res)
      if (res.data.articles){
        context.commit('setArticles', res.data.articles)
      } else {
        context.commit('An error occurred while fetching articles')
      }
  }
  },
  modules: {
  }
})
