// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

function InlineEditorController($scope){

	// $scope is a special object that makes
	// its properties available to the view as
	// variables. Here we set some default values:

	$scope.showtooltip = true;
    $scope.showlocation = true;
    $scope.showlocation = true;
    $scope.value = 'to do';
    $scope.value_loc = 'where';
    $scope.value_time = 'Whatdeadline';

}