const mongoose = require('mongoose');

const PlayquerySchema = new mongoose.Schema({
    id:String,
    name:String,
    title:String,
})

const Playquery = mongoose.Model('playlists', PlayquerySchema);

module.exports(Playquery)