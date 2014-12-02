  var gymApp = angular.module('gymApp', ['ngRoute']);

  gymApp.config(['$routeProvider','$locationProvider',
      function($routeProvider,$locationProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider.
          when('/', {
              templateUrl: 'home.html',
              controller: 'loginController'
          }).
          when('/profile', {
              templateUrl: 'views/profile.html',
              controller: 'profileController'
          }).
          when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerController as f'
          }).
          when('/about', {
            templateUrl: 'views/about.html'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]);

  gymApp.controller('navController', function($scope) {

    $scope.type = "";

      $scope.pages = [{
          "name": "Home",
          "url": "#home"
      }, {
          "name": "Profile",
          "url": "#profile"
      }, {
          "name": "Register",
          "url": "#register"
      }, {
          "name": "About Us",
          "url": "#about"
      }, ];
  });