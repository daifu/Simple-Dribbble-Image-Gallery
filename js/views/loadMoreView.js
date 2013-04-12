/*global Backbone*/
var app = app || {};

(function($){

	app.LoadMoreView = Backbone.View.extend({
		el: $(window),
		initialize: function() {
			var that = this;
			that.$el.scroll(function() {
				if(that.$el.scrollTop() + that.$el.height() == $(document).height()) {
					// callback trigger
					that.scrollEnd();
				}
			});
		},
		scrollEnd: function() {
			var type = $($(".selected")[0]).attr('data');
			app.GalleryImages.fetch({
				listType: type,
				add: true,
				data: {
					page: app.GalleryImages.page + 1
				},
				success: function() {
					// trigger a custom event
					app.GalleryImages.trigger("addMore");
				}
			});
		}
	});

})(jQuery);