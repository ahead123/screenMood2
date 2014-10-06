'use strict';

/* Controllers */
var appControllers = angular.module('appControllers', []);


appControllers.controller('movieListCtrl', function($scope) {
  $scope.movies = [
    {'name': 'The Equalizer',
     'star': 'Denzel Washington',
   		'images': 'assets/img/the-equalizer.jpg',
   		'id': 'the-equalizer'},
    {'name': 'The Mazerunner',
     'star': 'Dylan O\'Brien',
   		'images': 'assets/img/trailer1.jpg',
   		'id': 'the-mazerunner'},
    {'name': 'The Blue Room',
     'star': 'Mathieu Almaric',
   		'images': 'assets/img/trailer3.jpg',
   		'id': 'the-blue-room'}
  ];
  
  $scope.orderProp = 'name';
});

appControllers.controller('movieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.movieId = $routeParams.movieId;
  }]);

