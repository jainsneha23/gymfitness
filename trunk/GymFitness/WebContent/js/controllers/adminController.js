gymApp.controller('gymController', function($scope) {

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
gymApp.controller('employeeController', function($scope, $modal) {

    $scope.employeeModel = model.employeeModel;

    $scope.allSelected = false;

    for (var i = 0; i < $scope.employeeModel.length; i++)
        $scope.employeeModel[i].selected = false;

    $scope.selectAll = function(value) {
        if (typeof value != "undefined") {
            $scope.employeeModel.map(function(obj) {
                obj.selected = value;
                return obj;
            });
        } else {
            $scope.allSelected = $scope.employeeModel.every(function(obj) {
                return obj.selected;
            });
        }
    }

    $scope.deleteItems = function() {
        if ($scope.editItems)
            $scope.employeeModel = $scope.employeeModel.filter(function(obj) {
                return obj.selected == false;
            });
    }

    $scope.addItem = function() {

        var modalInstance = $modal.open({
            templateUrl: 'addEmployee.html',
            controller: 'registerController'
        });

        modalInstance.result.then(function(obj) {
            $scope.employeeModel.push(obj);
        }, function() {});
    }
});
gymApp.controller('customerController', function($scope) {});

gymApp.controller('registerController', function($scope, $modalInstance) {

    $scope.message = '';

    $scope.registerFormData = {
        fname: "",
        lname: "",
        contact: "",
        email: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pin: "",
        dob: "",
        gender: "",
        doj: "",
        salary: "",
        lastpaid: ""
    };

    $scope.cancel = function(){
        $modalInstance.dismiss('cancel');
    }

    $scope.registerUser = function(form) {

        if (!form.$dirty || !form.$valid) {
            $scope.message = "Please fill up all fields";
            return;
        }
        $modalInstance.close($scope.registerFormData);

        /*$http.post('UserRegister', [$scope.registerFormData])
            .success(function(data, status, headers, config) {
                $scope.message = 'We added u';
            }).error(function(data, status, headers, config) {
                $scope.message = 'Error occured : ' + data;
            });*/

    };

});