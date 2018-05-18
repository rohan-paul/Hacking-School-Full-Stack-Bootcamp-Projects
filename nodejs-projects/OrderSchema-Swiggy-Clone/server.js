var express = require('express');
var bodyParser = require('body-parser');
var db = require('./dbconnect');
var Order = require('./models/order');

var app = express();

//middleware
app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    var order = new Order();
    user.name = req.body.name;
    user.email = req.body.email;

    user.save(function(err) {
        if(err) throw err;
        res.json({"Status" : "Success"});
    });
});


app.put('/:id', function (req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;

            user.name = req.body.name;
            user.email = req.body.email;

            user.save(function(err) {
                if(err) throw err;
                res.json(user);
            })

    })
})

app.delete('/:id', function(req, res) {
    User.remove({email: req.params.id}, function(err) {
        if(err) {
            throw err;
        }
        res.json({"Status" : "Successfully Deleted"});
    });
});

app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if(err) throw err;
        res.json(users);
    });
});

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});