'use strict';

var express = require('express');
var path = require('path');

module.exports = function(app) {
  if (app.get('env') === 'development') {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
  };

  if (app.get('env') === 'production') {
    // TODO
  };

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/../app/views');
  app.set('view engine', 'jade');
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, '/../public')));
  app.use(app.router);
};
