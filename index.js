//Import express package
const express = require("express");
//aquire all the express method
const app = express();
//This line import data base connection code and connect to data base
const db = require("./config/dbConnect");

const port =process.env.PORT || 8080;

// This libray help us to parse form data
const bodyParser = require("body-parser");

//Using body parser to parse data over the request body
app.use(bodyParser.urlencoded({ extended: true }));

//Using routes
app.use("/", require("./router"));

//Universal routing
app.get("*", (req, res) => {
    res.send("Page not found");
    return;
});

//This line is used to set up port number
app.listen(port, (err) => {
    if (!err) {
        console.log("Server is runninga at port no 8080");
    }
});
