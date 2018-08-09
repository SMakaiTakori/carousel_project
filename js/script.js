$(document).ready(function($) {
	
	var imageBox = $('.slider ul'),
		imageWidth = $('.slider ul li').first().children('img').width(),
	    imageQuantity = $('.slider ul').children('li').length,
	    currentImage = 1;

	imageBox.css('width', imageWidth*imageQuantity);
	console.log(imageWidth);	

	$('.nav button').on('click', function() {
		var whichButton = $(this).data('nav');

		if(whichButton === 'next'){
			if (currentImage===imageQuantity){
			currentImage= 1;
			transtion(currentImage, imageWidth);
			}else{
				currentImage++; //4
				transition(currentImage,imageWidth);
			}

		}else if (whichButton === 'prev'){
			if (currentImage === 1){
			currentImage = imageQuantity;
			transtion(currentImage, imageWidth);	
			}else{
			currentImage--;
			transition(currentImage, imageWidth);
			}
		}
	});

	function transition (currentImageInput, ImageWidthInput){
		var pxValue = -(currentImageInput-1) * ImageWidthInput
	
		imageBox.animate({
			'left':pxValue
		});
	}
});




// Image transition calculations
// -(1-1) * width = -0
// -(2-1) * width = -500
// -(3-1) * width = -1000