//Import mongoose package
const mongoose = require('mongoose');
//This code is basically to connect with database
mongoose.connect('mongodb://localhost/ecommerce');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;