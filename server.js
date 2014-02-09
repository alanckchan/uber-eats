var express = require('express');
var fs = require('fs');
var http = require('http');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = module.exports = express();
require('./config/express')(app);

var config = require('./config/config');

var mongoose = require('mongoose');
var db = mongoose.connect(config.db);

var routes_path = './app/routes';
fs.readdirSync(routes_path).forEach(function(file) {
  require(routes_path + '/' + file)(app);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
