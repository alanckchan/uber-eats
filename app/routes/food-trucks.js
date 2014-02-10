'use strict';

var food_trucks = require('../controllers/food-trucks');

module.exports = function(app) {
  app.get('/food-trucks', food_trucks.all);
  app.get('/food-trucks/near', food_trucks.near);
};

