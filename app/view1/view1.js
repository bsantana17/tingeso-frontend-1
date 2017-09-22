'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope,$http) {

	$scope.students = [];

    $scope.loadStudents = function(){
        $http.get('http://localhost:8087/tingeso-backend/students').then(function(response){
            $scope.students = response.data;
        });
    }

    $scope.loadStudents();

}]);