//Import mongoose package
const mongoose = require('mongoose');
//This code is basically to connect with database
// mongoose.connect('mongodb+srv://salajmondal27032001:mondalcse18@cluster0.uaeulnt.mongodb.net/ecommerce?retryWrites=true&w=majority');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


// db.once('open', function () {
//     console.log('Connected to Database :: MongoDB');
// });
const mongoAtlasUri='mongodb+srv://salajmondal27032001:mondalcse18@cluster0.uaeulnt.mongodb.net/ecommerce?retryWrites=true&w=majority';


    var db= mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
    
    ).then((result)=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log("Error to connect database",err);
    })


 

module.exports = db;