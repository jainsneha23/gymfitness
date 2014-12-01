  var gymApp = angular.module('gymApp', ['ngRoute']);

  gymApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          //$locationProvider.html5Mode(true);

          $routeProvider.
          when('/', {
              templateUrl: 'views/home.html'
          }).
          when('/facilities', {
              templateUrl: 'views/facilities.html'
          }).
          when('/activities', {
              templateUrl: 'views/activities.html'
          }).
          when('/member', {
              templateUrl: 'views/members.html',
              controller: 'memberController'
          }).
          when('/about', {
              templateUrl: 'views/about.html'
          }).
          when('/contact', {
              templateUrl: 'views/contact.html'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]);

  gymApp.controller('adminController', function($scope) {

      $scope.type = "";

      $scope.pages = [{
          "name": "Home",
          "url": "#home"
      }, {
          "name": "My profile",
          "url": "#profile"
      }, {
          "name": "Employee Manager",
          "url": "#register"
      }, {
          "name": "User Manager",
          "url": "#member"
      }, {
          "name": "About Us",
          "url": "#about"
      }, {
          "name": "Sign Out",
          "url": "#signout"
      }];
  });