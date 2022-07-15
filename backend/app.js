const express = require('express');
const request = require('request');
const app = express()
const port = 3000

var client_id = 'e64abb715a07490c804a9cb61e08b50d';
var client_secret = '8ddd836a6d9443508394df5e28638cbf';
var access_token = '';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    access_token = body.access_token;
    console.log(access_token);
  }
});

app.get('/', (req, res) => {
  res.send('Hello World 443433!')
  
})

app.get('/categories', (req, res) => {

    var authOptions = {
        url: 'https://api.spotify.com/v1/browse/categories',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        json: true
      };

      // vidi tuka za sto vrakja get na categories requesot
      //https://developer.spotify.com/documentation/web-api/reference/#/operations/get-categories
    request.get(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("body");
          console.log(body);
          console.log(body['categories']['items'][0])

          res.send(body['categories']['items'][0]['name'])
        }
        //console.log("error", response)
      });
  })

  app.get('/categories/:categoryId', (req, res) => {

    console.log(req.params);

    var authOptions = {
        url: `https://api.spotify.com/v1/browse/categories/${req.params['categoryId']}/playlists`,
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        json: true
      };

      // vidi tuka za sto vrakja get na categories requesot
      //https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-categories-playlists
    request.get(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("body");
          console.log(body);
          console.log(body['playlists']['items'][0])

          res.send(body['playlists']['items'][0]['name'])
        }
        //console.log("error", response)
      });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})