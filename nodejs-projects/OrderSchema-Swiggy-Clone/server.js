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

    order.customerId = req.body.customerId;
    order.driverId = req.body.driverId;
    order.orderItems = req.body.orderItems;
    order.selectedRestaurant = req.body.selectedRestaurant;
    order.createdAt = req.body.createdAt;
    order.updatedAt = req.body.updatedAt;
    order.deletedAt = req.body.deletedAt;
    order.completed = req.body.completed;
    order.specialInstructions = req.body.specialInstructions;

    order.save(function(err) {
        if(err) throw err;
        res.json({"Status" : "Success"});
    });
});

app.put('/:id', function (req, res) {
    Order.findById(req.params.id, function(err, user) {
        if (err) throw err;

        order.customerId = req.body.customerId;
        order.driverId = req.body.driverId;
        order.orderItems = req.body.orderItems;
        order.selectedRestaurant = req.body.selectedRestaurant;
        order.createdAt = req.body.createdAt;
        order.updatedAt = req.body.updatedAt;
        order.deletedAt = req.body.deletedAt;
        order.completed = req.body.completed;
        order.specialInstructions = req.body.specialInstructions;

            order.save(function(err) {
                if(err) throw err;
                res.json(user);
            })

    })
})

app.delete('/:id', function(req, res) {
    Order.remove({email: req.params.id}, function(err) {
        if(err) {
            throw err;
        }
        res.json({"Status" : "Successfully Deleted"});
    });
});

app.get('/', function(req, res) {
    Order.find({}, function(err, users) {
        if(err) throw err;
        res.json(users);
    });
});

app.listen(3232, function(err){
    if(err) throw err;
    console.log("Magic is on the way on route 3232");
});