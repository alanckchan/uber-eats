'use strict';

var FoodTruck = require('../models/food-truck.js');

exports.all = function(req, res) {
  FoodTruck.find().select('name location').exec(function(err, foodTrucks) {
    res.jsonp(foodTrucks);
  });
};

exports.find = function(req, res) {
  FoodTruck.findById(req.params.id).exec(function(err, foodTruck) {
    if (err) {
      res.send('{}');
    }
    else {
      res.jsonp(foodTruck);
    }
  });
};

exports.near = function(req, res) {
  FoodTruck.geoNear([parseFloat(req.query.lng), parseFloat(req.query.lat)], { maxDistance: req.query.distance/3961, distanceMultiplier: 3961, num: 1000, spherical: true }, function(err, results, stats) {
    res.jsonp(results);
  });
};
