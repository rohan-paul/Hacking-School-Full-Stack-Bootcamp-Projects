const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

var multer = require('multer');
var upload = multer({dest: './uploads'}); //  Defines where I want to save my uploaded files. When an image is received by the route, it will be automatically saved by multer to this directory.


var app = express();

// @route   GET /order/orders
// @desc    Tests order route
// @access  Public
// router.get('/orderTest', (req, res) => res.json({msg: "order works"}));

// list of all orders
router.get('/orders', (req, res) => {
    Order.find ({}, function(err, listOfOrders) {
        if(err) throw err;
        res.json(listOfOrders);
    });
});

// route for a specific order
router.get('/orders/:id', (req, res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

//route to post a new order updating the database
router.post('/', function (req, res) {
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

//route to update an existing order
router.put('/:id', function (req, res) {
    Order.findById(req.params.id, function(err, order) {
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
            res.json(order);
        })
    })
})

router.delete('/orders/:id', function(req, res) {
    Order.remove({driverId: req.params.id}, function(err) {
        if(err) {
            throw err;
        }
        res.json({"Status" : "Successfully Deleted"});
    });
});

/*For multer It's very crucial that the file name in upload.single() matches the name attribute in my index.html. i.e. the part < name="image" >
When an image is received by the route, it will be automatically saved by multer to the directory I previously specified. The upload.single call is handled by the multer middleware.

https://github.com/expressjs/multer#usage - Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form. Thats why I can use req.file in the below
*/

router.post('/upload', upload.single('image'), function(req, res) {
    if (!req.file) {
        console.log('No files received');
        return res.send({
            success: false
        })
    } else {
        console.log('File received');
        console.log('file info: ',req.file.image);
        return res.send({
            success: true
        })
    }
});

module.exports = router;
