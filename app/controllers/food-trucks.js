'use strict';

var mongoose = require('mongoose');
var FoodTruck = require('../models/food-truck.js');

exports.all = function(req, res) {
  FoodTruck.find().select('name location').exec(function(err, foodTrucks) {
    res.jsonp(foodTrucks);
  });
};
