'use strict';

var controllers = angular.module('uberEatsApp.controllers', []);

controllers.controller('MapController', function($scope, foodTruckService) {
  $scope.map = {
    center: {
      latitude: 37.775817,
      longitude: -122.418133
    },
    bounds: {},
    zoom: 15,
    events: {
      click: onMapClicked
    },
    foodTruckMarkers: [],
    userSelectedMarkerLocation: { },
    userSelectedMarkerOptions: { animation: 1 }
  };

  $scope.selectedFoodTruckName = "";
  $scope.selectedFoodTruckDetails = "";

  function onMapClicked(mapModel, eventName, originalEventArgs) {
    var lat = originalEventArgs[0].latLng.lat();
    var lng = originalEventArgs[0].latLng.lng();

    $scope.map.userSelectedMarkerLocation = { latitude: lat, longitude: lng };

    var bounds = $scope.map.bounds;
    var distance = distanceOfCurrentMapViewport(bounds.northeast.latitude, bounds.northeast.longitude, bounds.southwest.latitude, bounds.southwest.longitude);

    foodTruckService.getFoodTrucksNearLocation(lat, lng, distance).then(function(foodTrucks) {
      $scope.map.foodTruckMarkers = []
      foodTrucks.data.forEach(function(foodTruck) {
        $scope.map.foodTruckMarkers.push({ id: foodTruck.obj._id, latitude: foodTruck.obj.location[1], longitude: foodTruck.obj.location[0] });
      });

      $scope.map.foodTruckMarkers.forEach(function(marker) {
        marker.onClicked = function() {
          foodTruckService.getFoodTruckById(marker.id).then(function(foodTruck) {
            $scope.selectedFoodTruckName = foodTruck.data.name;
            $scope.selectedFoodTruckDetails = foodTruck.data.details;
          });
        };
      });
    });
  }

  // Forumla to calculate distance between two points found here: http://www.barattalo.it/2009/12/26/decimal-degrees-conversion-and-distance-of-two-points-on-google-map
  function distanceOfCurrentMapViewport(lat1, lon1, lat2, lon2) {
    var R = 3961; // mi
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180; 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }
});
