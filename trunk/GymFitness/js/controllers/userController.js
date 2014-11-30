gymApp.controller('profileController', function($scope, $http) {

    /*$http.post('GetProfile', [])
        .success(function(data, status, headers, config) {
            $scope.profileData = JSON.parse(data);
        }).error(function(data, status, headers, config) {
            $scope.message = 'Error in fetching profile. Please try again.';
        });*/

	$scope.profileData = {
		username: "tulsirock",
        fname: "sneha",
        lname: "jain",
        gender: "female",
        dob: "23 May 1990",
        email: "sneha.jain@gmail.com",
        phone: "1234567890",
        image: "images/mprofile.png"
	};

});

gymApp.controller('registerController', function($scope, $http) {

    $scope.message = '';

    $scope.registerFormData = {
        username: "sneha",
        fname: "",
        lname: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        image: ""
    };

    $scope.registerUser = function(form) {
        
        if(!form.$dirty || !form.$valid){
        	$scope.message = "Please fill up all fields";
        	return;
        }

        $http.post('UserRegister', [$scope.registerFormData])
        .success(function(data, status, headers, config) {
            $scope.message = 'We added u';
        }).error(function(data, status, headers, config) {
            $scope.message = 'Error occured : '+data;
        });

    };

});

gymApp.controller('loginController', function($scope, $http) {

    $scope.message = '';

    $scope.loginFormData = {
        username: "",
        password: ""
    };

    $scope.loginUser = function(form) {
        
        if(!form.$dirty || !form.$valid){
        	$scope.message = "Please fill up all fields";
        	return;
        }

        $http.post('Login', [$scope.loginFormData])
        .success(function(data, status, headers, config) {
            data = JSON.parse(data);
            if(data.type == "admin")
                window.open("admin.html");
            if(data.type == "employee")
                window.open("employee.html");
            if(data.type == "customer")
                window.open("customer.html");
        }).error(function(data, status, headers, config) {
            $scope.message = data;
        });

    };

});