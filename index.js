/* 
INDEX.JS
Not to be confused with index.ejs - this is the main file. 
We set up some routes that renders each page, require all 
the packages and start the server
*/

const express = require("express");
const app = express();
const routes = require('./routes/customerRoutes'); // import the routes
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static('public'));

// Use static server to serve the ABC Bank Website
app.get(
    '/',
    (req, res) => {
        res.render('index')
    });

app.get(
    '/deletecustomer',
    (req, res) => {
        res.render('deletecustomer')
    });

app.get(
    '/createcustomer',
    (req, res) => {
        res.render('createcustomer')
    });

app.get(
    '/updatecustomer',
    (req, res) => {
        res.render('updatecustomer')
    });

app.use('/', routes); //to use the imported routes

mongoose.connect(
    'mongodb+srv://tomschr:Cidc6riccj5vinT@cluster0.krk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})