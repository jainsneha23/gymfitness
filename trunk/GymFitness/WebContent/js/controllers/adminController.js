gymApp.controller('gymController', function($scope) {

    $scope.tabModel = model.tabModel;

    $scope.isOpened = [];
    $scope.editItem = [];

    $scope.disabled = false;

    $scope.edit = function() {
        $scope.editItems = !$scope.editItems;
        $scope.disabled = !$scope.disabled;
        var length = getActivetabModel().length;
        for (var i = 0; i < length; i++)
            $scope.isOpened[i] = $scope.editItems ? false : null;
    }

    $scope.editRow = function(index) {
        $scope.editItem[index] = !$scope.editItem[index];
        $scope.isOpened[index] = $scope.editItem[index];
        $scope.disabled = $scope.editItem[index];
        var length = getActivetabModel().length;
        for (var i = 0; i < length; i++)
            $scope.editItem[i] = index == i ? $scope.editItem[i] : false;
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

    $scope.selectTab = function(){
        $scope.editItems = false;
        $scope.isOpened = [];
        $scope.editItem = [];
    }

});
gymApp.controller('employeeController', function($scope, $modal) {

    $scope.employeeModel = tempmodel.employeeModel;

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