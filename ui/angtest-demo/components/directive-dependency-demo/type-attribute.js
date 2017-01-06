module.exports =  function() {
	return {
		restrict: "A",
		require: "animal",
		link: function(scope, element, attributes, animalController) {
			let type = attributes["animaltype"];
			if (type === "dog")
				animalController.say = "GAU";
			if (type === "cat")
				animalController.say = "MAU";
		}
	}
};