/*global Backbone _ $*/
var app = app || {};

(function($){

	app.AppView = Backbone.View.extend({
		el: '#main',
		template: _.template($("#image-gallery-list").html()),
		initialize: function() {
			app.GalleryImages.fetch();
		}
	});

})(jQuery);