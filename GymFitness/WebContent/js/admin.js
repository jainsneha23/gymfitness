  var gymApp = angular.module('gymApp', ['ngRoute', 'ui.bootstrap']);

  gymApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          //$locationProvider.html5Mode(true);

          var url = "views/admin/";

          $routeProvider.
          when('/', {
              templateUrl: url + 'home.html'
          }).
          when('/gym', {
              templateUrl: url + 'gym.html',
              controller: 'gymController'
          }).
          when('/employee', {
              templateUrl: url + 'employee.html',
              controller: 'employeeController'
          }).
          when('/customer', {
              templateUrl: url + 'customer.html',
              controller: 'customerController'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]);

  gymApp.controller('adminController', function($scope) {

      $scope.type = "";

      $scope.pages = [{
          "name": "Gym",
          "url": "#gym"
      }, {
          "name": "Employee",
          "url": "#employee"
      }, {
          "name": "Customer",
          "url": "#customer"
      }];
  });