

$(document).ready(function () {

	Global.initParallax({
		parent: '#parallax'
	});
	Global.initParallax({
		parent: '#parallax2'
	});

	Global.fourSlider({
		slider: '.four-slider'
	});

	Global.threeSlider({
		slider: '.events'
	});

	Global.arrowSlider({
		slider: '.arrow-slider'
	});

	Global.sliderSinc({
		sliderTop: '.history__top',
		sliderBottom: '.history__bottom'
	});

	Global.simpleSlider({
		slider: '.simple-slider'
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
		$('.nav, .header__wrap').toggleClass('is-active');
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