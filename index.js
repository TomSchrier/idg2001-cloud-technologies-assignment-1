const express = require("express");
const app = express();
const routes = require('./routes/customerRoutes'); // import the routes

app.use(express.json()); // parses incoming requests with JSON payloads
app.use('/', routes); //to use the imported routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})