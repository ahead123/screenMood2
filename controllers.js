'use strict';

/* Controllers */
var appControllers = angular.module('appControllers', []);


appControllers.controller('movieListCtrl', function ($scope, $http) {
 $http.get('https://api.themoviedb.org/3/movie/550?api_key=4e97980d22d007478cd203a25e459f44&append_to_response=images&include_image_language=en,null').success(function(data) {
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

appControllers.controller('popularMovieListCtrl', function ($scope, $http) {
    var base = 'http://api.themoviedb.org/3';
    var service = '/movie/popular';
    var apiKey = '4e97980d22d007478cd203a25e459f44';
    var callback = 'JSON_CALLBACK'; // provided by angular.js
    var url = base + service + '?api_key=' + apiKey + '&callback=' + callback;

    $scope.result = 'requesting...';

    $http.get(url).then(function(data, status) { 
      $scope.result = JSON.stringify(data); 
    },function(data, status) {
      $scope.result = JSON.stringify(data);
    });
});