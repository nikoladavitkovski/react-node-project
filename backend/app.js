const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3000

const  { 
  getCategories,
  getPlayList,
} = require('./controllers/spotify.js')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
      console.log("listening on port 5000");
      app.listen(5000)
    })
    .catch((err) => console.log(Error))

app.get('/', (req, res) => {
  res.send('Hello World 443433!')
  
})

app.get('/categories', getCategories)

app.get('/categories/:categoryId', getPlayList)