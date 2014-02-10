'use strict';

var services = angular.module('uberEatsApp.services', []);

services.factory('foodTruckService', function($http) {
  return {
    getFoodTrucks: function() {
      return $http.get('/food-trucks').then(function(result) {
        return result.data;
      });
    },

    getFoodTrucksNearLocation: function(lat, lng, distance) {
      return $http.get('/food-trucks/near?lat=' + lat + '&lng=' + lng + '&distance=' + distance);
    }
  }
});
