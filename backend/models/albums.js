const mongoose = require('mongoose');

const albumsSchema = new mongoose.Schema({
    id:String,
    warning:Name,
    picture:Name,
})

const Albums = mongoose.Model('Albums', albumsSchema);

module.extends = Albums