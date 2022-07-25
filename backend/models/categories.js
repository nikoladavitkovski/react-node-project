const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
    name:String,
    id:String,
})

const Category = mongoose.model('Category', CategoriesSchema)

module.exports = Category