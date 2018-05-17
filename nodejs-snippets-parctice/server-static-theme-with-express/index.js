var express = require('express');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var serve = serveStatic('public/ftp');
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, 'public/templated-hielo')));

app.listen(3232, function(){
    console.log("Magic is on the way on route 3232");
});