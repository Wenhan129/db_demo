const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LINK_SCHEMA = new Schema({
    link_url: String,
    link_duration: Number
})

let USER_SCHEMA = new Schema({
    user_name: String,
    user_ip: String,
    user_clicked_links: [LINK_SCHEMA]
})

module.exports = mongoose.model('USER', USER_SCHEMA);