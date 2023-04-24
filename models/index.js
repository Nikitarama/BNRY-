
const express = require('express');

const ArticlesURL = ('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=aed654939b3540588c898f58df96e6c3'); 


// const fetchArticlesURL(context) {
//     const res = await axios.get(`${ArticlesURL}`)};
//    console.log(res)
//     if (res.data.articles){
//       context.commit('setArticles', res.data.articles)
//     } else {
//       context.commit('An error occurred while fetching articles')
//     };

// fetch(ArticlesURL)
//   .then(res => {
//     if (res.data.ArticlesURL) {
//         console.log(res.data.ArticlesURL)
//     } else {
//         console.log(Message)
//     }
//   })

//   .then(data => console.log(data))


