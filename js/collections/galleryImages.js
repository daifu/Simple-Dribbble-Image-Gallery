/*global Backbone */
var app = app || {};

(function() {
	'use strict';

	var GalleryImages = Backbone.Collection.extend({
		model: app.GalleryImage,
		options: {
			listType: 'popular'
		},
		url: function() {
			return 'http://api.dribbble.com/shots/'+this.options.listType;
		},
		sync: function(method, model, options) {
			// solution found on fixint CORS problem on backbone
			// https://github.com/documentcloud/backbone/pull/307
			options.dataType = "jsonp";
			options.timeout = 10000; // required, or the application won't pick up on 404 responses
			this.options.listType = options.listType || 'popular';
			return Backbone.sync(method, model, options);
		},
		parse: function(response) {
			this.page = response.page;
			this.per_page = response.per_page;
			this.pages = response.pages;
			this.total = response.total;
			return response.shots;
		}
	});

	app.GalleryImages = new GalleryImages();
})();