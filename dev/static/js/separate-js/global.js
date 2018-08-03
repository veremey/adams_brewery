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

		openBtn.onclick = function () {
			var openItem = this.getAttribute('data-open').split(' ');

			for (var i = openItem.length - 1; i >= 0; i--) {
				var open = document.querySelector( '.' + openItem[i] );
				open.classList.remove('is-active');
			}

		};
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
