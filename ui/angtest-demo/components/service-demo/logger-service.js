module.exports = function() {
	let logger = {
		log: function(msg) {
			console.log(msg);
		}
	};
	return logger;
};