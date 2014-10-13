'use strict';

/* Controllers */
var appControllers = angular.module('appControllers', []);


appControllers.controller('movieListCtrl', function ($scope, $http) {
 $http.get('partial/movies.json').success(function(data) {
  $scope.movies = data;
  });
  $scope.orderProp = 'name';
});

appControllers.controller('movieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.movieId = $routeParams.movieId;
  }]);

appControllers.controller('movieGenreCtrl', function ($scope, $http) {
  $http.get('partial/questions.json').success(function(data) {
      $scope.questions = data;
  });  
});

appControllers.controller('movieQuestCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.questionId = $routeParams.questionId;
  }]);

