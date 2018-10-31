const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EVENT_SCHEMA = new Schema({
    start_time: Number,
    duration: Number,
    ending_time: Number,
    url: String,
    ip: String
})

module.exports = mongoose.model('EVENT', EVENT_SCHEMA);