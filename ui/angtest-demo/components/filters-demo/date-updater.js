module.exports = ["$scope", "$interval", function($scope, $interval) {
	$scope.datetime = new Date();
	let autoupdate = $interval(() => $scope.datetime = new Date(), 1000);
	$scope.$on("$destroy", () => $interval.cancel(autoupdate));
}];