ManagerApp.factory('SongFactory', function($rootScope) {

    return {
        getSongsList : function(callback) {
            try {
                cordova.exec(function(data) {
                    console.log(data);
                    $rootScope.$apply(function() {
                        callback(data);
                    });
                }, function() {
                    alert('Error in finding songs');
                }, "SongsPlugin", "getSongs", [""]);

            } catch (e) {
                callback(list);
            }
        }
    }
});

ManagerApp.factory('deviceReady', function(){
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