module.exports = function() {
	return {
		restrict: "E",
		scope: {},
		controller: ["$scope", function($scope) {
			this.say = "HELLO";
			this.speak = function() {
				alert(this.say);
			};
		}],
		template: '<div><img src="images/{{animalType}}.jpg"</img></div>',
		link: function(scope, element, attributes, controller) {
			scope.animalType = attributes["animaltype"];
			if (!scope.animalType)
				scope.animalType = "none";

			element.bind("click", function() {
				controller.speak();
			});
		}
	}
};