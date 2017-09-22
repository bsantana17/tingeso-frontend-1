'use strict';

angular.module('myApp.list_student', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list_student', {
    templateUrl: 'list_student/list_student.html',
    controller: 'ListStudentCtrl'
  });
}])

.controller('ListStudentCtrl', ['$scope','$http', function($scope,$http) {

	$scope.students = [];

    $scope.loadStudents = function(){
        $http.get('http://localhost:8087/tingeso-backend/students').then(function(response){
            $scope.students = response.data;
        });
    }

    $scope.loadStudents();

}]);