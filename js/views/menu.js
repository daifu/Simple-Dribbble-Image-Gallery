/*global Backbone _ $*/
var app = app || {};

(function($){

	app.MenuView = Backbone.View.extend({
		el: '#menu',
		template: _.template($("#menu-template").html()),
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.empty();
			this.$el.append(this.template());
		}
	});

})(jQuery);