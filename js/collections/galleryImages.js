/*global Backbone */
var app = app || {};

(function() {
	'use strict';

	var GalleryImages = Backbone.Collection.extend({
		model: app.GalleryImage,
		url: "http://api.dribbble.com/shots/popular",
		sync: function(method, model, options) {
			// solution found on fixint CORS problem on backbone
			// https://github.com/documentcloud/backbone/pull/307
			options.dataType = "jsonp";
			options.timeout = 10000; // required, or the application won't pick up on 404 responses
			return Backbone.sync(method, model, options);
		}
	});

	app.GalleryImages = new GalleryImages();
})();