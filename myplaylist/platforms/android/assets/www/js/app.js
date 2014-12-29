var ManagerApp = angular.module('ManagerApp', []);
    ManagerApp.controller('listController', function($scope) {
        $scope.getSongs = function() {
            $scope.writeSongs(list);
            try{
                cordova.exec(function(data) {
                    //$scope.writeSongs(data);
                    console.log(data);
                }, function(){
                    alert('Error in finding songs');
                }, "SongsPlugin", "getSongs", [""]);
            }catch(e){
                $scope.songsList = list;
                $scope.$apply();
            }
        };
        $scope.writeSongs = function(data){
            $scope.songsList = data;
            $scope.$apply();
        }
    });


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    angular.bootstrap(document, ['ManagerApp']);
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