module.exports = function() {
	this.message = "helloworld";
	this.update = function(msg) {
		this.message = msg;
	};
}