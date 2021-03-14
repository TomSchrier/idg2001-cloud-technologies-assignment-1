const express = require("express");
const app = express();
const routes = require('./routes/customerRoutes'); // import the routes
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: true }));

// Use static server to serve the Express Yourself Website
app.use(express.static('public'));
app.use('/', routes); //to use the imported routes
//4VaxGGRv
mongoose.connect(
    'mongodb+srv://tomschr:Cidc6riccj5vinT@cluster0.krk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})