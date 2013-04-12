// check getting the GalleryImages
(function($){

app.GalleryImages.fetch({
	success: function() {
		var isPassed = true;
		if(app.GalleryImages.length !== 15) {
			alert("Not passed no 1 with length: "+app.GalleryImages.length);
			isPassed = false;
		}

		app.GalleryImages.fetch({
			data: {
				page: app.GalleryImages.page+1
			},
			success: function() {
				if(app.GalleryImages.length !== 15 || app.GalleryImages.page !== 2) {
					alert("Not passed no 2 length: "+app.GalleryImages.length);
					alert("Not passed no 2 page: "+app.GalleryImages.page);
					isPassed = false;
				}
			}
		});

		var cidBefore = app.GalleryImages.models[0].cid;
		app.GalleryImages.fetch({
			listType: "debuts",
			reset: true,
			success: function() {
				var cidAfter = app.GalleryImages.models[0].cid;
				if(cidBefore === cidAfter) {
					alert("Not passed no 2 with changing tab");
					isPassed = false;
				}
			}
		});


		if (isPassed) {
			$("body").append("Good, passed all tests!");
		}
	}
});

})(jQuery);