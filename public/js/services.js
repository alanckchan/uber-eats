'use strict';

var services = angular.module('uberEatsApp.services', []);

services.factory('foodTruckService', function($http) {
  return {
    getFoodTrucks: function() {
      return $http.get('/food-trucks').then(function(result) {
        return result.data;
      });
    },

    getFoodTruckById: function(id) {
      return $http.get('/food-trucks/' + id);
    },

    getFoodTrucksNearLocation: function(lat, lng, distance) {
      return $http.get('/food-trucks/find/near?lat=' + lat + '&lng=' + lng + '&distance=' + distance);
    }
  }
});
