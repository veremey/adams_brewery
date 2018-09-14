var Global = new GlobalClass();

function GlobalClass() {
	var globalThis = this;

	/*--- close something ---*/
	/*--------------------------------------------------*/
	this.close = function (e) {
		var closeBtn = $('.js-close');

		closeBtn.on('click', function (e) {
			e.preventDefault();
			var closedItem = $(this).data('close').split(' ');
			for (var i = closedItem.length - 1; i >= 0; i--) {
				var close = $( '.' + closedItem[i] );
				close.removeClass('is-active');
			}
			$('.page').removeClass('is-fixed');

		});
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

			var openItem = $(this).data('open').split(' ');
			$(this).parents('.js-tab-parent').eq(0).find('.js-tab, .js-tabItem').removeClass('is-active');
			$(this).addClass('is-active');

			// var open = $( '[data-tab*="'+ openItem +'"] ');
			for (var i = openItem.length - 1; i >= 0; i--) {
				$( '[data-tab*="'+ openItem[i]+'"] ').addClass('is-active');
				// $( '[data-tab*="'+ openItem +'"] ')
			}

			AOS.refresh();
			// open.addClass('is-active');

		});
	}

	/*--- open ppp ---*/
	/*--------------------------------------------------*/
	this.ppp = function () {
		var pppBtn = $('.js-ppp');

		pppBtn.on('click', function (e) {
			e.preventDefault();

			var ppp = $('.ppp');
			var pppItem = $(this).data('ppp');

			$('.page').addClass('is-fixed');
			ppp.removeClass('is-active');
			ppp.addClass('is-active');

			var pppWindow = $( '#' + pppItem );
			var closeBtn = $( '#' + pppItem + ' .js-close' );
			pppWindow.addClass('is-active');
			closeBtn.focus();
		});

	};


	/*- tooltip  -*/


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
		slider.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
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
		slider.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
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
		slider.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
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
		slider.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
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
		slider.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
			});
	}

	/*- slider sync  -*/
	this.sliderSync = function (opt) {
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
			asNavFor: opt.sliderTop,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						dots: false
					}
				}
			]
		});
		sliderBottom.on('afterChange', function (slick, currentSlide) {
				$('.slick-slide').removeClass('is-focused');
				$(this).find('.slick-active').addClass('is-focused').focus();
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
