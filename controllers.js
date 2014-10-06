'use strict';

/* Controllers */
var appControllers = angular.module('appControllers', []);


appControllers.controller('movieController', function($scope) {
  $scope.movies = [
    {'name': 'The Equalizer',
     'star': 'Denzel Washington'},
    {'name': 'Left Behind',
     'star': 'Nicolas Cage'},
    {'name': 'The Blue Room',
     'star': 'Mathieu Almaric'}
  ];

  $scope.orderProp = 'name';
});


