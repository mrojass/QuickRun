var QuickRun = angular.module("QuickRun", ["firebase"]);

var navList = angular.module('navList', []);

var TaskController = function($scope) {
	$scope.tasks = [{job:"test", location:"Howey", deadline:"11:00am"}];
	
$scope.addTask = function(){
    var task = {
        job: $scope.job,
        location: $scope.location,
        deadline: $scope.deadline,
    };
    $scope.tasks.push(task);
  }; 

  $scope.removeTask = function(index){
    $scope.tasks.splice(index, 1);
  }; 

}