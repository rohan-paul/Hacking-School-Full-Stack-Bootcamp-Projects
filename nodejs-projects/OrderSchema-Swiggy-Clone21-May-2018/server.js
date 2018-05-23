var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var Order = require('./models/order');
var order = require('./routes/order');
var router = express.Router();
var path = require('path');

var app = express();

//middleware
app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(__dirname + '/public'))

// Use Routes
app.use('/', order);

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});