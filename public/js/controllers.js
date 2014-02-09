'use strict';

var controllers = angular.module('uberEatsApp.controllers', []);

controllers.controller('MapController', function($scope, foodTruckService) {
  $scope.map = {
    center: {
      latitude: 37.775817,
      longitude: -122.418133
    },
    zoom: 15
  };

  $scope.map.foodTruckMarkers = [];

  foodTruckService.getFoodTrucks().then(function(foodTrucks) {
    foodTrucks.forEach(function(foodTruck) {
      $scope.map.foodTruckMarkers.push({ latitude: foodTruck.location[1], longitude: foodTruck.location[0] });
    });
  });
});
