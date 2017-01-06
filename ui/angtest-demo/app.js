let angular = require("angular");
let app = angular.module("angtest-demo", [])
	.factory("logger", require("./components/service-demo/logger-service"))
	.factory("notifications", require("./components/service-demo/notifications-service"))
	.factory("messages", require("./components/multi-controller-demo/messages-service"))
	.controller("BindingController", require("./components/binding-demo/controller"))
	.controller("BasicControllerController", require("./components/basic-controller-demo/controller"))
	.controller("FunctionalControllerController", require("./components/functional-controller-demo/controller"))
	.controller("AsControllerController", require("./components/as-controller-demo/controller"))
	.controller("ServiceController", require("./components/service-demo/controller"))
	.controller("OutsideServiceController", require("./components/outside-service-demo/controller"))
	.controller("MsgList", require("./components/multi-controller-demo/msg-list"))
	.controller("MsgForm", require("./components/multi-controller-demo/msg-form"))
	.controller("DateUpdater", require("./components/filters-demo/date-updater"))
	.controller("SimpleDirectivesController", require("./components/simple-directives-demo/controller"))
	.filter("DateToString", require("./components/filters-demo/date-filter"))
	.directive("helloworldelm", require("./components/simple-directives-demo/hello-world-element"))
	.directive("helloworlda", require("./components/simple-directives-demo/hello-world-attribute"))
	.directive("animal", require("./components/directive-dependency-demo/animal-element"))
	.directive("animaltype", require("./components/directive-dependency-demo/type-attribute"));
module.exports = app;