/*global Backbone */
var app = app || {};

(function() {
	'use strict';

	app.GalleryImage = Backbone.Model.extend({
		defaults: {
			title: "",
			image_url: "",
			likes_count: 0,
			comments_count: 0
		}
	});
})();