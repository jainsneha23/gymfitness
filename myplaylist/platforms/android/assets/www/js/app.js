var ManagerApp = angular.module('ManagerApp', []);
    ManagerApp.controller('listController', function($scope) {
        $scope.getSongs = function() {
            cordova.exec(function(data) {
                $scope.songsList = data;
                console.log(data);
                $scope.$apply();
            }, failure, "Echo", "getSongs", ["Sneha"]);
        };
    });


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    angular.bootstrap(document, ['ManagerApp']);
}

var failure = function(err) {
    alert("Error calling Hello Plugin: " + err);
}



/*angular.module('ManagerApp.services.Cordova', [])

        .factory('deviceReady', function(){
          return function(done) {
            if (typeof window.cordova === 'object') {
              document.addEventListener('deviceready', function () {
                done();
              }, false);
            } else {
              done();
            }
          };
        });
*/