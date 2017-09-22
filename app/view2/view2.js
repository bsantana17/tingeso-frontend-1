'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope,$http) {

	$scope.newStudent = {};

    $scope.resetNewStudent = function(){
        $scope.newStudent = {
        "name":"",
        "rut":0,
        "email":"",
        "career":"",
        "yearIncome":0
        }
    }

	$scope.send = function(){
        console.log($scope.newStudent);
        var student = {
            "name":$scope.newStudent.name,
            "rut":$scope.newStudent.rut,
            "email":$scope.newStudent.email,
            "career":$scope.newStudent.career,
            "yearIncome":$scope.newStudent.yearIncome
        };
        $http.post('http://localhost:8087/tingeso-backend/students',student).then(function(response){
            console.log(response);
        });
    }

}]);