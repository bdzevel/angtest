module.exports = ["$scope", "logger", "notifications", function($scope, logger, notifications) {
	$scope.errorCode = 0;

	$scope.log = function(msg) {
		logger.log(msg);
		$scope.errorCode = 0;
		$scope.status = "Message logged";
	};

	$scope.sendNotification = function(msg) {
		notifications.notify(msg);
		$scope.errorCode = 0;
		$scope.status = "Notification sent";
	};

	$scope.fail = function() {
		$scope.errorCode = 100;
		$scope.status = "ARBITRARY FAILURE";
	}
}];