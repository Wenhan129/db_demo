const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LinkSchema = new Schema({
    linkUrl: String,
    linkDuration: Number
})

let userSchema = new Schema({
    userName: String,
    userIP: String,
    userClickedLinks: [LinkSchema]
})

module.exports = mongoose.model('URL', userSchema);