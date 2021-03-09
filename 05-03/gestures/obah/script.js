var nameApp = angular.module('starter', ['ionic']);

nameApp.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise("/");
 
});


nameApp.controller('HomeCtrl', function($scope, $ionicGesture) {
  
  $scope.gesture = {
    used: ''
  };  

  $scope.onGesture = function(gesture) {
    $scope.gesture.used = gesture;
    console.log(gesture);
  }

  var element = angular.element(document.querySelector('#content')); 
  
  $ionicGesture.on('tap', function(e){
    $scope.$apply(function() {
      console.log('Tap');
      $scope.gesture.used = 'Tap';
    })    
  }, element);

});
