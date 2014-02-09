'use strict';

var request = require('request');

module.exports = function(grunt) {
  grunt.registerTask('db-seed-data', 'Imports food truck data from DataSF and populates mongodb', function() {
    grunt.log.write('Seeding food truck data...');

    var done = this.async();

    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    var config = require('../config/config');
    var mongoose = require('mongoose');

    var db = mongoose.connect(config.db);
    var FoodTruck = require('../app/models/food-truck');

    request('https://data.sfgov.org/api/views/rqzj-sfat/rows.json', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var foodTrucks = JSON.parse(body).data;
        var foodTrucksToCreate = [];
        foodTrucks.forEach(function(foodTruck) {
          foodTrucksToCreate.push({ name: foodTruck[9], location: [foodTruck[30][2], foodTruck[30][1]] });
        });

        var promise = FoodTruck.create(foodTrucksToCreate);
        promise.then(function(createdFoodTrucks) {
          done();
        },
        function(err) {
          done();
        });
      }
    });
  });
};

