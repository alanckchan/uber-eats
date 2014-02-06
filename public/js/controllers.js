'use strict';

var controllers = angular.module('uberEatsApp.controllers', []);

controllers.controller('MapController', ['$scope', function($scope) {
  $scope.map = {
    center: {
      latitude: 37.775817,
      longitude: -122.418133
    },
    zoom: 15
  };
}]);
