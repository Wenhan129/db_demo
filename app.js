const express = require('express');
const bodyParser = require('body-parser');

// Import routes for the Links
const user = require('./routes/user.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://admin:passwd777@ds030817.mlab.com:30817/wenhan-testing'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Parse the incoming request by body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/user', user);


let port = 1031;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});