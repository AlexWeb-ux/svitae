document.addEventListener('DOMContentLoaded', function() {
   //swiper
	var swiper = new Swiper(".slider__swiper", {
    effect: 'slide',
    //centeredSlides: true,
    //grabCursor: true,
		//slideToClickedSlide: true,
		loop: true,
    //initialSlide: 0,
		breakpoints: {
			350: {
				slidesPerView: 1.0,
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			480: {
				slidesPerView: 1.3,
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			650: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			768: {
				slidesPerView: 1.8,
				spaceBetween: 20,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			800: {
				slidesPerView: 2.0,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1000: {
				slidesPerView: 2.5,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1100: {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1200: {
				slidesPerView: 4.0,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		},
	});
	var swiper = new Swiper(".slider__swiper_1", {
    effect: 'slide',
    //centeredSlides: true,
    //grabCursor: true,
		//slideToClickedSlide: true,
		loop: true,
    //initialSlide: 0,
		breakpoints: {
			350: {
				slidesPerView: 1.0,
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			480: {
				slidesPerView: 1.3,
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			650: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			768: {
				slidesPerView: 1.8,
				spaceBetween: 20,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			800: {
				slidesPerView: 2.0,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1000: {
				slidesPerView: 2.5,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1100: {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			1200: {
				slidesPerView: 4.0,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		},
	});
//burger
	$('.menu_icon').click(function () {
		$('.burger_menu').fadeIn();
	})
	$('.header_list a').click(function () {
		$('.burger_menu').fadeOut();
	})
	$('.burger_close').click(function () {
		$('.burger_menu').fadeOut();
	})
//testim
	$('.testim-1').click(function(){
		$('.hidden_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.testim-1').html('Дивитися відгуки про товар');
			} else {
				$('.testim-1').html('Приховати');
			}							
		});
		return false;
	});
	$('.testim-2').click(function(){
		$('.hidden_block_1').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.testim-2').html('Дивитися відгуки про товар');
			} else {
				$('.testim-2').html('Приховати');
			}							
		});
		return false;
	});
//nav
	var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
		$('.mobile__nav').toggle('hidden');
  });

	$('.sale').click(function () {
		$('.success').fadeIn();
		$('.dark__block').fadeIn();		
	})	
	$('.play').click(function () {
		$('.video-modal').fadeIn();
		$('.dark__block').fadeIn();		
	})	
	$('.close_modal').click(function () {
		$('.video-modal').fadeOut();
		$('.success').fadeOut();
		$('.dark__block').fadeOut();		
	})
	$('.dark__block').click(function () {
		$('.success').fadeOut();
		$('.video-modal').fadeOut();
		$(this).fadeOut();		
	})
	//top
	var btn = $('#button');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   }); 
	
});
