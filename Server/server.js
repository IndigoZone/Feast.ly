// sets up server requirements
var express = require('express'),
  bodyparser = require('body-parser'),
  mongoose = require('mongoose');

//creates server
var app = express();

//creates default port
var port = process.env.PORT || 4444;

//connects app and port
app.listen(port);
//prints sucess when the server is running 
console.log('Server now listening on por: ', port);

//exports the app server
module.exports = app;

