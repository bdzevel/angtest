module.exports = function() {
	let messagesService = {
		list: [],
		push: function(msg) {
			this.list.push(msg);
		},
		clear: function() {
			while(this.list.pop())
				/* Empty */ ;
		}
	};
	return messagesService;
};