gymApp.controller('memberController', function($scope, $http, $window) {

    $scope.message = '';

    $scope.loginFormData = {
        username: "",
        password: ""
    };

    $scope.loginUser = function(form) {

        if (!form.$dirty || !form.$valid) {
            $scope.message = "Please fill up all fields";
            return;
        }

        $http.post('Login', [$scope.loginFormData])
            .success(function(data, status, headers, config) {
                data = JSON.parse(data);
                if (data.type == "admin")
                    window.open("admin.html");
                if (data.type == "employee")
                    window.open("employee.html");
                if (data.type == "customer")
                    window.open("customer.html");
            }).error(function(data, status, headers, config) {
                $scope.message = data;
                $window.open("admin.html", "_self");
            });

    };

});