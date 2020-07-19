// This file will show me the list of directories and files as soon as I start up the server with ``$ node server.js``. And I can open up each of the individual files to show their content.

// var express = require('express');
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

var index = serveIndex('public', {'icons': true});

// Serve up public folder files inside my root folder
var serve = serveStatic('public');


var server = http.createServer(function onRequest(req, res){
    var done = finalhandler(req, res)
    serve(req, res, function onNext(err) {
      if (err) return done(err)
      index(req, res, done)
    })
  })

  // Listen
  server.listen(3000);