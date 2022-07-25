const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema({
    name: String,
    id: String,
    albums: String,
    songs: String
})

const Players = mongoose.Model('Players', playersSchema)

module.exports = Players