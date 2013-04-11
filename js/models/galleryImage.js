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
		},
		parse: function(response) {
			var json = {};
			json.image_url = response.image_url;
			json.likes_count = response.likes_count;
			json.comments_count = response.comments_count;
			json.title  = response.title;
			return json;
		},
		toJSON: function() {
			var json = {
				image_url: this.attributes.image_url,
				likes_count: this.attributes.likes_count,
				comments_count: this.attributes.comments_count
			};
			return json;
		}
	});
})();