module.exports = ["$scope", "messages", function($scope, messages) {
	$scope.push = function(msg) {
		if (!msg)
			return;
		if (messages.list.find((m) => m === msg))
			return;
		messages.push(msg);
	};
	$scope.clear = function() {
		messages.clear();
	};
}];