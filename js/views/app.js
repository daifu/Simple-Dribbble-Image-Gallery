/*global Backbone _ $*/
var app = app || {};

(function($){

	app.AppView = Backbone.View.extend({
		el: '#main',
		initialize: function() {
			var that = this;
			app.GalleryImages.fetch({
				success: function() {
					that.render();
				}
			});
		},
		render: function() {
			this.$el.empty();
			app.GalleryImages.each(this.addOne, this);
		},
		addOne: function(model) {
			var galleryImageView = new app.GalleryImageView({
				model: model
			});
			this.$el.append(galleryImageView.render().el);
		}
	});

})(jQuery);