var Global = new GlobalClass();

function GlobalClass() {
	var globalThis = this;

	/*--- close something ---*/
	/*--------------------------------------------------*/
	this.close = function () {
		var closeBtn = document.querySelector('.js-close');

		closeBtn.onclick = function () {
			var closedItem = this.getAttribute('data-close').split(' ');

			for (var i = closedItem.length - 1; i >= 0; i--) {
				var close = document.querySelector( '.' + closedItem[i] );
				close.classList.remove('is-active');
			}

		};
	}

	/*--- open something ---*/
	/*--------------------------------------------------*/
	this.open = function () {
		var openBtn = document.querySelector('.js-open');

		openBtn.onclick = function (e) {
			e.preventDefault();
			var openItem = this.getAttribute('data-open').split(' ');

			for (var i = openItem.length - 1; i >= 0; i--) {
				var open = document.querySelector( '.' + openItem[i] );
				open.classList.remove('is-active');
			}

			this.classList.add('is-active');

		};
	}

	/*--- tab ---*/
	/*--------------------------------------------------*/
	this.tab = function (e) {

		$('.js-tab').on('click', function (e) {
			e.preventDefault();

			var openItem = $(this).data('open');
			$('.js-tab, .js-tabItem').removeClass('is-active');
			$(this).addClass('is-active');

			var open = $( '#' + openItem );
			open.addClass('is-active');


		});
	}

	/*--- open ppp ---*/
	/*--------------------------------------------------*/
	this.ppp = function () {
		var pppBtn = document.querySelector('.js-ppp');
		// var ppp = document.getElementsByClassName('ppp');

		pppBtn.onclick = function () {
			var ppp = document.querySelector('.ppp');
			var pppWrap = document.querySelectorAll('.ppp-wrap');
			var pppItem = this.getAttribute('data-ppp').split(' ');

			ppp.classList.remove('is-active');
			ppp.classList.add('is-active');

			[].forEach.call(pppWrap, function (el) {
				el.classList.remove('is-active');
			} );

			for (var i = pppItem.length - 1; i >= 0; i--) {
				var pppWindow = document.querySelector( '.' + pppItem[i] );
				pppWindow.classList.add('is-active');
			}

		};
	}

	/*- picture slider  -*/

	this.pictureSlider = function (opt) {
		var slider = $(opt.slider);

		slider.each(function () {
			$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: $(this).parents('.js-parent').find('.section__nav_prev'),
			nextArrow: $(this).parents('.js-parent').find('.section__nav_next'),
		});
		});
	}
	/*- simple slider  -*/

	this.simpleSlider = function (opt) {
		var slider = $(opt.slider);

		slider.each(function () {
			$(this).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: $(this).parents('.js-parent').find('.section__nav_prev'),
			nextArrow: $(this).parents('.js-parent').find('.section__nav_next'),
		});
		});
	}
	/*- four slider  -*/

	this.fourSlider = function (opt) {
		var slider = $(opt.slider);

		slider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: slider.parents('.section').find('.section__nav_prev'),
			nextArrow: slider.parents('.section').find('.section__nav_next'),
			responsive: [
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2
					}
				}
			]

		});
	}

	/*- three slider  -*/

	this.threeSlider = function (opt) {
		var slider = $(opt.slider);

		slider.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			prevArrow: slider.parents('.section').find('.section__nav_prev'),
			nextArrow: slider.parents('.section').find('.section__nav_next'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	/*- arrow slider  -*/
	this.arrowSlider = function (opt) {
		var slider = $(opt.slider);

		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			prevArrow: slider.parents('.section').find('.section__nav_prev'),
			nextArrow: slider.parents('.section').find('.section__nav_next'),
		});
	}

	/*- slider sinc  -*/
	this.sliderSinc = function (opt) {
		var sliderTop = $(opt.sliderTop);
		var sliderBottom = $(opt.sliderBottom);

		sliderTop.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			infinite: false,
			asNavFor: opt.sliderBottom
		});
		sliderBottom.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: sliderBottom.parents('.section').find('.section__nav_prev'),
			nextArrow: sliderBottom.parents('.section').find('.section__nav_next'),
			dots: true,
			infinite: false,
			adaptiveHeight: true,
			dots: true,
			customPaging: function(slider, i) {
			return '<button class="tab">' + $(slider.$slides[i]).find('.slide-year').text() + '</button>';
			},
			asNavFor: opt.sliderTop
		});
	}

	/*- height = width -*/

	this.square = function (opt) {
		var widthEl = $(opt.widthEl);
		var heightEl = $(opt.heightEl);
		var offset = opt.offset;
		var width = widthEl.width() - offset;

		heightEl.css({ 'height' : width});
	}


	/* --- parallax scrollMagic init ---*/
	/*--------------------------------------------------------------------*/
	this.initParallax = function(opt) {

		var $window = $(window);
		var parent = $(opt.parent);
		var element = parent.find('.parallax_bg');

		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onEnter",
				duration: "200%"
			}
		});

		new ScrollMagic.Scene({triggerElement: opt.parent})
									.setTween(element, {y: '-30%', ease: Linear.easeNone})
									.addTo(controller);

		$(window).on("scroll", function() {
		    controller.update(true);
		});


	} //initParallax


} /*- end global -*/


/*-
/* for init do like this
/* Global.fourSlider();
-*/
