$(document).ready(function() {
    $('.menu-icon').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
			$('.navigation-wrapper').removeClass('show-menu');
			$('.navigation').hide();
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
            $('.menu-icon').hide();
	   }
	});
    $('.close-icon').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
            $('.navigation').fadeOut(function(){
                $('.navigation-wrapper').removeClass('show-menu');
            });
			
            $('.menu-icon').show();
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
	   }
	});
    $('.navigation li').hover(function(){
        $(this).find('span').addClass('gold-line');
        $(this).find('span').removeClass('grey-line');
    },function(){
        $(this).find('span').addClass('grey-line');
        $(this).find('span').removeClass('gold-line');
    });
});