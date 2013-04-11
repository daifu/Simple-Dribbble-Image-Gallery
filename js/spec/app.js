// check getting the GalleryImages
app.GalleryImages.fetch({
	success: function() {
		if(app.GalleryImages.length !== 15) {
			alert("Not passed with length: "+app.GalleryImages.length);
		} else {
			$("body").append("Good, passed all tests!");
		}
	}
});