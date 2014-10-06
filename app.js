'use strict';


var app = angular.module('app', [
	'ngRoute',
	'appControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partial/movie-list.html',
        controller: 'movieListCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: 'partial/movie-detail.html',
        controller: 'movieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);