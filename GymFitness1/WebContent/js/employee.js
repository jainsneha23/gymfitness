  var gymApp = angular.module('gymApp', ['ngRoute', 'angular-carousel']);

  gymApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          //$locationProvider.html5Mode(true);

          $routeProvider.
          when('/', {
              templateUrl: 'views/home.html'
          }).
          when('/profile', {
              templateUrl: 'views/profile.html',
              controller : 'profileController'
          }).
          when('/customerProfile', {
              templateUrl: 'views/profile.html',
              controller : 'profileController'
          }).
          when('/register', {
              templateUrl: 'views/register.html',
              controller: 'registerController'
          }).
          when('/dietPlans', {
              templateUrl: 'views/dietPlans.html'
          }).
          when('/exerciseRoutines', {
              templateUrl: 'views/exerciseRoutines.html'
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