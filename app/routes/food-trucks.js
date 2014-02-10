'use strict';

var food_trucks = require('../controllers/food-trucks');

module.exports = function(app) {
  app.get('/food-trucks', food_trucks.all);
  app.get('/food-trucks/:id', food_trucks.find);
  app.get('/food-trucks/find/near', food_trucks.near);
};

