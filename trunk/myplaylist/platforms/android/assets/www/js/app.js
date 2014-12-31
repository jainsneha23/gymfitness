document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('device ready fired');
    angular.bootstrap(document, ['ManagerApp']);
}

var ManagerApp = angular.module('ManagerApp', []);
ManagerApp.controller('listController', function($scope, SongFactory) {

    $scope.getSongs = function() {
        SongFactory.getSongsList($scope.writeSongs);
    };
    $scope.writeSongs = function(data) {
        $scope.songsList = typeof data == "object" ? data : JSON.parse(data);
        if(!$scope.$$phase)
            $scope.$apply();
    }

    $scope.getSongs();
});