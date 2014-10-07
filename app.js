'use strict';


var app = angular.module('app', [
	'ngRoute',
	'appControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partial/movie-genres.html',
        controller: 'movieGenreCtrl'
      }).
      when('/movies/questions/:questionId', {
        templateUrl: 'partial/questions.html',
        controller: 'movieQuestCtrl' 
      }).
      when('/movies/:movieId', {
        templateUrl: 'partial/movie-detail.html',
        controller: 'movieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);