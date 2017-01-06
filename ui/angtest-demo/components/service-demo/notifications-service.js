module.exports = ["$window", function($window) {
	let notifications = {
		notify: function(msg) {
			$window.alert(msg);
		}
	};
	return notifications;
}];