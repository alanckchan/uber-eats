'use strict';

var services = angular.module('uberEatsApp.services', []);

services.factory('foodTruckService', function($http) {
  return {
    getFoodTrucks: function() {
      return $http.get('/food-trucks').then(function(result) {
        return result.data;
      });
    }
  }
});
