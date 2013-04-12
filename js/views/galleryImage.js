/*global Backbone*/
var app = app || {};

(function($){

	app.GalleryImageView = Backbone.View.extend({
		tagName: 'figure',
		className: 'galleryImage',
		template: _.template($("#image-gallery-template").html()),
		render: function() {
			this.$el.append(this.template(this.model.toJSON()));
			return this;
		}
	});

})(jQuery);