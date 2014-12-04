gymApp.controller('gymController', function($scope, $http) {

    $scope.tabModel = [{
        name: 'Activities',
        isActive: true,
        url: 'views/admin/activities.html',
        model: model.activities
    }, {
        name: 'Equipments',
        isActive: false,
        url: 'views/admin/equipments.html',
        model: model.equipments
    }, {
        name: 'Facilities',
        isActive: false,
        url: 'views/admin/facilities.html'
    }, {
        name: 'Packages',
        isActive: false,
        url: 'views/admin/packages.html'
    }];

    $scope.isOpened = [];

    $scope.edit = function() {
        $scope.editItems = !$scope.editItems;
        var length = getActivetabModel().length;
        for (var i = 0; i < length; i++)
            $scope.isOpened[i] = $scope.editItems ? false : null;
    }

    $scope.form = {
        name: '',
        description: ''
    };

    var getActivetabModel = function() {
        var arr = $scope.tabModel.filter(function(value) {
            return value.isActive == true
        });
        return arr[0].model;
    }

    $scope.addItem = function() {
        var item = {
            name: $scope.form.name,
            description: $scope.form.description
        };
        getActivetabModel().push(item);
        $scope.form = {};
    };

    $scope.deleteItem = function(index) {
        getActivetabModel().splice(index, 1);
    }

});
gymApp.controller('employeeController', function($scope, $http) {});
gymApp.controller('customerController', function($scope, $http) {});