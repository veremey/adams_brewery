
$(document).ready(function () {

	$('.tooltip').mouseenter(function () {
		$(this).find('.tooltip__slider').slick('reinit');
	});

	if($('.cocoen').length){
		$('.cocoen').cocoen();
	}

	if($('.js-datepicker').length){
		$('.js-datepicker').datepicker({
				minDate: new Date()
		})
	}

	if($('#years').length) {
		(function () {
			setTimeout(function() {
				$('.page').addClass('is-fixed');
				$('.ppp').addClass('is-active');
				$('#years').addClass('is-active');
			} , 5000);
		})();
	}

	// --- accordion ---- */

	$('.js-accordion').click(function () {
		$(this).toggleClass('is-hidden');
	});


	Global.ppp();
	Global.close();

	$('.ppp__wrap').on('click', function () {
		$('.ppp__box, .ppp').removeClass('is-active');
		$('.page').removeClass('is-fixed');
	})

	Global.initParallax({
		parent: '#parallax'
	});

	if($('#parallax2').length) {
		Global.initParallax({
			parent: '#parallax2'
		});
	}

	Global.fourSlider({
		slider: '.four-slider'
	});

	Global.threeSlider({
		slider: '.events'
	});

	Global.arrowSlider({
		slider: '.arrow-slider'
	});

	Global.sliderSync({
		sliderTop: '.history__top',
		sliderBottom: '.history__bottom'
	});

	Global.simpleSlider({
		slider: '.simple-slider'
	});

	Global.simpleSlider({
		slider: '.tooltip__slider'
	});

	Global.pictureSlider({
		slider: '.picture-slider'
	});

	Global.tab();

	Global.square({
		widthEl: '.four-slider__item',
		heightEl: '.four-slider__content',
		offset: 25
	});

	$('.menu__btn').click(function () {
		$(this).toggleClass('is-active');
		$('.nav, .header__wrap, .page__wrapper').toggleClass('is-active');
	});



	AOS.init({
		initClassName: 'aos-init',
		animatedClassName: 'aos-animate',
	});


});
/*- end doc ready -*/


/*-   resize doc  -*/

$(window).on('resize', function () {

	Global.square({
		widthEl: '.four-slider__item',
		heightEl: '.four-slider__content',
		offset: 25
	});

});