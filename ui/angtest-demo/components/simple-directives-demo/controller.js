module.exports = [ "$scope", function($scope) {
	$scope.count = 0;
	$scope.speak = function() {
		if (this.count > 5)
			console.log(`Hello x${this.count}`);
		else
			alert(`Hello x${this.count}`);
		this.count++;
	};
}];