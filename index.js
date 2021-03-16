/* 
INDEX.JS
Not to be confused with index.ejs - this is the main file. 
We set up some routes that renders each page, require all 
the packages and start the server
*/
require('dotenv').config();
const helmet = require('helmet');
const compression = require('compression');
const express = require("express");
const app = express();
const routes = require('./routes/customerRoutes'); // import the routes
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(helmet());
app.set('view engine', 'ejs');
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "views"));
app.use(express.static('public'));
app.use(compression()); //Compress all routes

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
    process.env.MONGODB_URI,
    {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
      replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    },
    function (err) {
      if (err) return console.log("Error: ", err);
      console.log(
        "MongoDB Connection -- Ready state is:",
        mongoose.connection.readyState
      );
    }
  );
  
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})