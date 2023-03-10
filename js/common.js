document.addEventListener("DOMContentLoaded", function () {
  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      }, 500
    );
    return false;
  });
  var toggle = document.querySelector(".nav-toggle");
  toggle.addEventListener("click", function (e) {
    this.classList.toggle("opened");
    $(".mobile__nav").toggle("hidden");
  });

  $(".mobile__link").click(function () {
    $(".mobile__nav").css("display", "none");
    $(".nav-toggle").removeClass("opened");
  });
  var swiper = new Swiper(".slider__swiper", {
    effect: "slide",
    loop: true,
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
    effect: "slide",
    loop: true,
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

  $(".menu_icon").click(function () {
    $(".burger_menu").fadeIn();
  });
  $(".header_list a").click(function () {
    $(".burger_menu").fadeOut();
  });
  $(".burger_close").click(function () {
    $(".burger_menu").fadeOut();
  });

  $(".testim-1").click(function () {
    $(".hidden_block").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".testim-1").html("???????????????? ?????????????? ?????? ??????????");
      } else {
        $(".testim-1").html("??????????????????");
      }
    });
    return false;
  });

  $(".testim-2").click(function () {
    $(".hidden_block_1").slideToggle(300, function () {
      if ($(this).is(":hidden")) {
        $(".testim-2").html("???????????????? ?????????????? ?????? ??????????");
      } else {
        $(".testim-2").html("??????????????????");
      }
    });
    return false;
  });
	
  $(".sale").click(function () {
    $(".success").fadeIn();
    $(".dark__block").fadeIn();
  });
  $(".play").click(function () {
    $(".video-modal").fadeIn();
    $(".dark__block").fadeIn();
  });
  $(".close_modal").click(function () {
    $(".video-modal").fadeOut();
    $(".success").fadeOut();
    $(".dark__block").fadeOut();
  });
  $(".dark__block").click(function () {
    $(".success").fadeOut();
    $(".video-modal").fadeOut();
    $(this).fadeOut();
  });
  var btn = $("#button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "400");
  });
});
