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
			currentImage++;
			var pxValue = -(currentImage-1) * imageWidth

			imageBox.animate({
				'left' : pxValue
			})

		}else if (whichButton === 'prev'){
			currentImage--;
			var pxValue = -(currentImage-1) * imageWidth

			imageBox.animate({  
				'left' : pxValue
			})
		}
	});
});
