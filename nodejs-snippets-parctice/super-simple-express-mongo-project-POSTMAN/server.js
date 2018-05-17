var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var User = require('./models/user');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;

    user.save(function(err) {
        if(err) throw err;
        res.json({"Status" : "Success"});
    });
});

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});