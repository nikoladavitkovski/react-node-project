const mongoose = require('mongoose');

const playlistsSchema = new mongoose.Schema({
    video:String,
    length:String,
    title:String,
    song:String
})

const Playlists = mongoose.Model('playlists', playlistsSchema)

module.exports(Playlists)