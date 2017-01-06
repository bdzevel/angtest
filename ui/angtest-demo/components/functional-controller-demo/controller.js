module.exports = ["$scope", function($scope) {
	$scope.message = "n/a";
	$scope.update = function(msg) {
		this.message = msg;
	}
}];