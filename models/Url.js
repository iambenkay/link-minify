const mongoose = require('mongoose')
const Schema = mongoose.Schema

const URLSchema = new Schema({
    url: {type: String, unique: true, required: true},
    code: {type: String, unique: true, required: true}
})


module.exports = mongoose.model('url', URLSchema)
