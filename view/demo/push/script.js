/*
 * layout
 */
define(function(require) {
	var comm = require('sdk/server');
	require('sdk/common');

	app.ready(function() {
		app.window.popoverElement({
			id:'view',
			url:'./content.html',
			name:'listWin',
			bounces:true
		})

	});
});