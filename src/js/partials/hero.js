$(document).ready(function() {
	$('.hero__arrow').on('click', function() {
		$('.hero').removeClass('js-active');
		$('.choice').addClass('js-active');
	})

	$('.wrapper').bind('DOMMouseScroll mousewheel', function(e){
		if(!(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)) {
			if ($('.hero').hasClass('js-active')) {
				$('.hero').removeClass('js-active');
				$('.choice').addClass('js-active');
			}
		}
	});
	let event = null;
	$(document).on("touchstart", function (e) {
		event = e;
	});
	$(document).on("touchmove", function (e) {
		if (!((e.touches[0].pageY - event.touches[0].pageY) > 0)) {
			if ($('.hero').hasClass('js-active')) {
				$('.hero').removeClass('js-active');
				$('.choice').addClass('js-active');
			}
		}
	});
	$(document).on("touched", function (e) {
		event = null;
	});
})