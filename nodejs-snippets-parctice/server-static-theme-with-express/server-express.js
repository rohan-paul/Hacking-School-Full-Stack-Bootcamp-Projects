// This file will show me the list of directories and files as soon as I start up the server with ``$ node server.js``. And I can open up each of the individual files to show their content.

var express = require('express');
var path = require('path');

var app = express();

var serveIndex = require('serve-index');

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory

app.use('/', express.static('public'), serveIndex('public', {'icons': true}))


app.listen(3000);