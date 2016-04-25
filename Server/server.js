// sets up server requirements
var express = require('express'),
  bodyparser = require('body-parser'),
  mongoose = require('mongoose');

//creates server
var app = express();

//creates default port
var port = process.env.PORT || 4444;


