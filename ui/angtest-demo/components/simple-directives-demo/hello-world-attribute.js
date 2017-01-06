module.exports = function() {
	return {
		restrict: "A",
		link: function(scope, element, attributes) {
			element.bind("mouseenter", function() {
				scope.$apply(attributes["helloworlda"]);
			});
		}
	};
};