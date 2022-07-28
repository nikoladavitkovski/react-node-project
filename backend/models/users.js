const mongoose = require('mongoose');
const { initParams } = require('request');

const { PropTypes } = require('request');

const { params } = require('albums','categories');

const usersSchema = new mongoose.Schema({
    id:String,
    time:Date,
    request:String,
    views:Int32Array,
})

const Users = mongoose.Model('users', usersSchema)

module.exports = Users