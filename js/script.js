$(document).ready(function($) {
	
	var imageBox = $('.slider ul');
	var imageWidth = $('.slider ul li').first().children('img').width();
	var imageQuantity = $('.slider ul').children('li').length;

	imageBox.css('width', imageWidth*imageQuantity);
	console.log(imageWidth);	

	$('.nav button').on('click', function() {
		var whichButton = $(this).data('nav');

		console.log('working');

		if(whichButton === 'next'){
			console.log('next')
			imageBox.animate({
				'left' : '-500px'
			})

		}else if (whichButton === 'prev'){
			console.log('prev')
			imageBox.animate({
				'left' : '+500px'
			})
		}
	});
});
