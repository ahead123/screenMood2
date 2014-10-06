'use strict';

/* Controllers */
var appControllers = angular.module('appControllers', []);


appControllers.controller('movieListCtrl', function($scope) {
  $scope.movies = [
    {'name': 'The Equalizer',
     'star': 'Denzel Washington',
   		'images': 'assets/img/the-equalizer.jpg',
   		'id': 'the-equalizer',
      'snippet': 'A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life. But when he meets a young girl under the control of ultra-violent...'},
    {'name': 'The Mazerunner',
     'star': 'Dylan O\'Brien',
   		'images': 'assets/img/trailer1.jpg',
   		'id': 'the-mazerunner',
      'snippet': 'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze...'},
    {'name': 'The Blue Room',
     'star': 'Mathieu Almaric',
   		'images': 'assets/img/trailer3.jpg',
   		'id': 'the-blue-room',
      'snippet': 'A man and a woman, secretly in love, alone in a room. They desire each other, want each other, and even bite each other. In the afterglow, they share a few sweet...'}
  ];
  
  $scope.orderProp = 'name';
});

appControllers.controller('movieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.movieId = $routeParams.movieId;
  }]);

