  var gymApp = angular.module('gymApp', ['ngRoute', 'angular-carousel']);

  gymApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          //$locationProvider.html5Mode(true);
          var url = 'views/employee/';
          var shared = 'views/shared/';

          $routeProvider.
          when('/', {
              templateUrl: url+'home.html'
          }).
          when('/profile', {
              templateUrl: shared+'profile.html',
              controller : 'profileController'
          }).
          when('/customerProfile', {
              templateUrl: shared+'profile.html',
              controller : 'profileController'
          }).
          when('/register', {
              templateUrl: shared+'register.html',
              controller: 'registerController'
          }).
          when('/dietPlans', {
              templateUrl: url+'dietPlans.html'
          }).
          when('/exerciseRoutines', {
              templateUrl: url+'exerciseRoutines.html'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]);

  gymApp.controller('homeController', function($scope) {

      $scope.type = "";

      $scope.pages = [{
          "name": "Home",
          "url": "#home"
      }, {
          "name": "Profile",
          "url": "#profile"
      }, {
          "name": "Customer Management",
          "url": "#customerProfile"
      }, {
          "name": "New Customer",
          "url": "#register"
      }, {
          "name": "Diet Plans",
          "url": "#dietPlans"
      }, {
          "name": "Exercise Routines",
          "url": "#exerciseRoutines"
      }];
  });