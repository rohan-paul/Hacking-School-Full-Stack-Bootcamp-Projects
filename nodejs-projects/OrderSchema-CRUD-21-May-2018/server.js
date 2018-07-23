var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var Order = require('./models/order');
var orderRoutes = require('./routes/order');
var router = express.Router();
var path = require('path');

var app = express();

//middleware
app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.text());  // Reads the buffer as plain text and exposes the resulting string on req.body.
app.use(bodyParser.urlencoded({extended: true})); 
// The above for parsing application/x-www-form-urlencoded. Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. 

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(__dirname + '/public'))

// Use Routes - with this code all the order routes that I have coded in ./routes/order will be served where the url starts from '/' (i.e. the home url)
app.use('/', orderRoutes);

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});