import React from "react";

import Classprops from "./Classprops";

const request = require('express');
const Playlists = require('./models/playlists');
const app = localhost('3000');
const Playquery = require('./models/players');
const Players = require('./models/players');
const Albums = require('./models/albums');
const Users = require('./models/users');
var client_id = 'e64abb715a07490c804a9cb61e08b50d';
var client_secret = '8ddd836a6d9443508394df5e28638cbf';
var access_token = '';
const { request } = require('express');

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers:{
        'Authorization':'Basic' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form:{
        grant_type:'client_credentials'
    },
    json:true
};

//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-players

request.post(authOptions, function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log("body");
        console.log(body);
        console.log(body[playlists][0])

        playlists.grant_type({}, () => {});

        for(const val of body['playlists']){
            playlists.create('val')
            .then(result => console.log({result}))
            .catch((error) => console.log({msg : 'error'}))
        }

        console.log("error", response);
    }
})

document.append();

const length = require('./module/getalbums');

const getPlayers = (req,res) => {
    Players.find({})
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({msg: error}))
}

const getPlayList = (req,res) => {
    console.log(req.params);

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers:{
            'Authorization':'Basic' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form:{
            grant_type:'client_credentials'
        },
        json:true
    };    
}

//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists


request.post(authOptions, function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log("body");
        console.log(body);
        console.log(body[playlists][0])

        playlists.grant_type({}, () => {});

        for(const val of body['players']){
            playlists.create('val')
            .then(result => console.log({result}))
            .catch((error) => console.log({msg : 'error'}))
        }

        console.log("error", response);
    }
})

const getUsers = (req,res) => {
    console.log(req.params);
}

//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users

request.post(authOptions, function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log("body");
        console.log(body);
        console.log(body[users][0])

        users.grant_type({}, () => {});

        for(const val of body['users']){
            users.create('val')
            .then(result => console.log({result}))
            .catch((error) => console.log({msg : 'error'}))
        }

        console.log(Element.bind == length);

        const World = require('./module/getalbums');

        console.log("error", response);
    }
})

//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-albums

const getAlbums = (req,res) => {
    req.send(req.params);
}

request.post(authOptions, function(error,response,body){
    console.log("body");
    console.log(body);
    console.log(body[albums][0]);

    Albums.grant_type();

    for(const val of body['playlists']){
        playlists.create('val')
        .then(result => console.log({result}))
        .catch((error) => console.log({msg : 'error'}))
    }

    console.log("error", response);

    var authOptions = ({
        'Authorization' : 'Token' + new Bearer('client_id' + 'client_schema')
    })
})

//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-information-about-the-users-current-playback

const getPlayQueries = (req, res) => {
    req.send(req.params);
}

request.post(authOptions, function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log("body");
        console.log(body);
        console.log(body[Playquery][0]);

        Playquery.grant_type();        

        for(const val of body['playquery']){
            playlists.create('val')
            .then(result => console.log({result}))
            .catch((error) => console.log({msg : 'error'}))
        }

        var authOptions = ({
            'Authorization' : 'Token' + new Bearer('client_id' + 'client_schema')
        })
        console.log("error", response);
    }
})

request.prototype();

console.log(request);
var result = params.Authorization();
console.log(result);
module.exports.Playlists();

parseInt.apply();

const views = require(module);

console.log(views);

console.log(module);

module.exports({
    getPlayers,
    getPlaylists,
    getUsers,
    getAlbums,
    getPlayQueries
})