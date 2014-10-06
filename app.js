'use strict';


var app = angular.module('app', [
	'ngRoute',
	'appControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/partial', {
        templateUrl: 'partial/action.html',
        controller: 'movieController'
      }).
      otherwise({
        redirectTo: '/partial'
      });
  }]);