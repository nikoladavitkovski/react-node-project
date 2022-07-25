const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id:String,
    time:Date,
    request:String,
    views:Int32Array
})

const Users = mongoose.Model('users', usersSchema)

module.exports = Users