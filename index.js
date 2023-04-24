 //Packages Setup
const express = require('express');

const path = require('path');

const port = parseInt(process.env.PORT) || 4000;

const app = express();

const cors = require('cors');

//API Setup
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('aed654939b3540588c898f58df96e6c3');


app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
})

app.use('/', async (req,res) => {
        await newsapi.v2.everything({
            q: 'tesla',
            from: '2023-03-23',
            to: '2023-04-24',
            language: 'en',
            sortBy: 'relevancy',
            page: 2
          }).then(response => {
            res.status(200).send(response)
            /*
              {
                status: "ok",
                articles: [...]
              }
            */
          });
})




app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});