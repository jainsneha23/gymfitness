gymApp.controller('gymController', function($scope, $http) {

	activeTab = 0;

    $scope.activities_model = model.activities;
    $scope.equipments_model = model.equipments;

    $scope.model = [$scope.activities_model,$scope.equipments_model];

    $scope.editItems = false;
    $scope.form = {
    	name : '',
    	description : ''
    };

    $scope.addItem = function(){
    	var item = {
    		name : $scope.form.name,
    		description : $scope.form.description
    	};
    	$scope.model[activeTab].push(item);
    	$scope.form = {};
    };

    $scope.deleteItem = function(index) {
    	$scope.model[activeTab].splice(index,1);
    }

});
gymApp.controller('employeeController', function($scope, $http) {});
gymApp.controller('customerController', function($scope, $http) {});