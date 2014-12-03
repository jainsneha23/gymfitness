  var gymApp = angular.module('gymApp', ['ngRoute', 'ui.bootstrap']);

  gymApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {

          //$locationProvider.html5Mode(true);

          var url = 'views/home/';

          $routeProvider.
          when('/', {
              templateUrl: url + 'home.html'
          }).
          when('/facilities', {
              templateUrl: url + 'facilities.html'
          }).
          when('/activities', {
              templateUrl: url + 'activities.html'
          }).
          when('/member', {
              templateUrl: url + 'members.html',
              controller: 'memberController'
          }).
          when('/about', {
              templateUrl: url + 'about.html'
          }).
          when('/contact', {
              templateUrl: url + 'contact.html'
          }).
          otherwise({
              redirectTo: '/'
          });
      }
  ]);

  gymApp.controller('homeController', function($scope) {

      $scope.type = "";

      $scope.pages = [{
          "name": "Activities",
          "url": "#activities"
      }, {
          "name": "Facilities",
          "url": "#facilities"
      }, {
          "name": "Contact Us",
          "url": "#contact"
      }, {
          "name": "Members",
          "url": "#member"
      }];
      $scope.myInterval = 3000;

      $scope.galleryImages = [{
          image: 'images/gallery1.jpg'
      }, {
          image: 'images/gallery2.jpg'
      }, {
          image: 'images/gallery3.jpg'
      }, {
          image: 'images/gallery4.jpg'
      }, {
          image: 'images/gallery5.jpg'
      }, {
          image: 'images/gallery6.jpg'
      }, {
          image: 'images/gallery7.jpg'
      }, {
          image: 'images/gallery8.jpg'
      }, {
          image: 'images/gallery9.jpg'
      }];
  });

  gymApp.controller('memberController', function($scope, $http, $window) {

      $scope.message = '';

      $scope.loginFormData = {
          username: "",
          password: ""
      };

      $scope.loginUser = function(form) {

          if (!form.$dirty || !form.$valid) {
              $scope.message = "Please fill up all fields";
              return;
          }

          $http.post('Login', [$scope.loginFormData])
              .success(function(data, status, headers, config) {
                  data = JSON.parse(data);
                  if (data.type == "admin")
                      window.open("admin.html");
                  if (data.type == "employee")
                      window.open("employee.html");
                  if (data.type == "customer")
                      window.open("customer.html");
              }).error(function(data, status, headers, config) {
                  $scope.message = data;
              });

      };

  });