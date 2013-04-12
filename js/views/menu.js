/*global Backbone _ $*/
var app = app || {};

(function($){

	app.MenuView = Backbone.View.extend({
		el: '#menu',
		template: _.template($("#menu-template").html()),
		initialize: function() {
			this.render();
		},
		render: function(curListType) {
			this.$el.empty();
			var json = {
				listType: curListType || 'popular'
			};
			this.$el.append(this.template(json));
		},
		events: {
			"click .menu": "change"
		},
		change: function(e) {
			var data = $(e.target).attr("data");
			app.GalleryImages.fetch({
				listType: data,
				reset: true
			});
			this.render(data);
		}
	});

})(jQuery);