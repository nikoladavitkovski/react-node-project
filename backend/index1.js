const express = require('express');
const request = require('request');
const app = express('3000');
const port = 3000

const client_id = 'e64abb715a07490c804a9cb61e08b50d';
const client_secret = '8ddd836a6d9443508394df5e28638cbf';
var access_token = '';

var authOptions = {
    client_id,
    client_secret,
    url:'https://accounts.web.api/com/token/',
    headers:{
        'Authorization' : 'Basic' + new Buffer(client_id + ':' + client_secret).toString('base64')        
    },
    form:{
        grant_type: 'client_credentials',
    },
    json:true
}

var authOptions = {
    url:'https://www.developer.spotify.com/documentation/web-api/reference/operations/get-a-categories-playlists',
    headers:{
        'Authorization' : 'Basic' + new Buffer(client_id + ':' + client_secret).toString('base64')        
    },
    form:{
        grant_type: 'client_credentials',
    },
    json:true
}

request.get(authOptions, function(error, res, body){
    if(!error && res.statusCode === 200){
        access_token == body.access_token;
        console.log("body");
        console.log(body);
        console.log();
        console.log(client_id);
        console.log(client_secret);

        res.send([body][categories][0]['name']);
    }

    var authOptions = {
        url:'https://accounts.web.api/com/token/',
        headers:{
            'Authorization' : 'Basic' + new Buffer(client_id + ':' + client_secret).toString('base64')        
        },
        form:{
            grant_type: 'client_credentials',
        },
        json:true
    }

app.get('/',req,res => {
    res.send('Hello World 444333!');
    res.send('Hello World 555222!');
})

request.get(authOptions, function(error, res, body){
    if(!error && res.statusCode === 200){
        access_token == body.access_token;
        console.log("body");
        console.log(body);
        console.log();


        res.send([body][categories][0]['name']);
    }
});
})