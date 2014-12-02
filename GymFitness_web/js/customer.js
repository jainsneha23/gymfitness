  var gymApp = angular.module('gymApp', ['ngRoute', 'angular-carousel']);

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

  gymApp.controller('homeController', function($scope) {

      $scope.type = "";

      $scope.pages = [{
          "name": "Home",
          "url": "#home"
      }, {
          "name": "Facilities",
          "url": "#facilities"
      }, {
          "name": "Activities",
          "url": "#activities"
      }, {
          "name": "Members",
          "url": "#member"
      }, {
          "name": "About Us",
          "url": "#about"
      }, {
          "name": "Contact Us",
          "url": "#contact"
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