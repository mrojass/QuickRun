var QuickRun = angular.module("QuickRun", ["firebase"]);

QuickRun.controller("TaskController", ['$scope', function($scope) {
	$scope.task.name='';
	$scope.task.address='';
	$scope.task.deadline='';

}])

QuickRun.directive("addrow", function() {
	return function(scope, element) {
		element.bind("click", function() {
			var table = angular.element().parent().parent().parent().parent();
			
			var rows = angular.element(table.find("tr"));

			var i = rows.length + 1;

			var new_row = angular.element(rows[1].clone());

			var inputs = new_row.find("input");

			for (var x = 0; x < inputs.length; x++) {
				var input = angular.element(inputs[x]);

				input.attr("description", input.attr('description') + i);
				input.attr("value", '');

			}

			angular.element.(table.children()[0]).append(new_row);
		});
	}
});