/*global Backbone */
var app = app || {};

(function() {
	'use strict';

	var GalleryImages = Backbone.Collection.extend({
		model: app.GalleryImage,
		url: "http://api.dribbble.com/shots/popular"
	});

	app.GalleryImages = new GalleryImages();
})();