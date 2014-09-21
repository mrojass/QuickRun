var QuickRun = angular.module("QuickRun", ["firebase"]);

var navList = angular.module('navList', []);

var TaskController = function($scope) {
	$scope.tasks = [];

	$scope.add = function() {
		$scope.tasks.push(task);
	};

}