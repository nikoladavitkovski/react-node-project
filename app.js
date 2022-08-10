const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3000

const  { 
  getCategories,
  getPlayList,
  getAlbums,
  getPlayQueries,
  getUsers,
  getPlayLists,
  getPlayers,
  getPlayersUsers,
  getPlayQuery,
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
  res.send('Hello World 555333!')
  res.send('Hello World!')
})

app.get('/categories', getCategories)

app.get('/categories/:categoryId', getUsers)

app.get('/categories/:categoryId', getAlbums)

app.get('/categories/:categoryId', getPlayersUsers)

app.get('/categories/:categoryId', getPlayQueries)

app.get('/categories/:categoryId', getPlayers)

app.get('/categories/:categoryId', getPlayLists)

app.get('/categories/:categoryId', getPlayList)