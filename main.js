var QuickRun = angular.module("QuickRun", ["firebase"]);

var navList = angular.module('navList', []);

navList.comtroller('navCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.navClass = function (page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	}
}]);


var layer = L.mapbox.tileLayer('examples.map-i86nkdio');
layer.on('ready', function() {
  // the layer has been fully loaded now, and you can
  // call .getTileJSON and investigate its properties
});

var layer = L.mapbox.tileLayer('examples.map-i86nkdio');
layer.on('error', function(err) {
  // Handle error
});