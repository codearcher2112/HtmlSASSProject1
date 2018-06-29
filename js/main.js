$(document).ready(function() {

  //Burger Btn
  $('.burgerNav').on("click", function() {
    $('.header').toggleClass('sideNavActive');
    $('.main').toggleClass("mainPassive");
    $(this).toggleClass('change');
  });

  // For < 768px mobile divices
  $('.burgerNav').on("click", function() {
    $(this).toggleClass('flexOrder2');
    $('.logoMobile').toggleClass("flexOrder1");
    $('.mobilePhone').toggleClass("visibility-hidden");
  });

  // Header Menu Toggle
  $('.primaryNavLeft li').hover(
    function() {
      $('>ul.dropBox', this).slideDown();
      $('>a.toggleMenu',this).addClass('arrowUp');
    },
    function() {
      $('>ul.dropBox', this).slideUp();
      $('>a.toggleMenu',this).removeClass('arrowUp');
    }
  );

  $('.primaryNavRight li').hover(
    function() {
      $('>ul.dropBox', this).slideDown();
      $('>a.toggleMenu', this).addClass('arrowUp');
    },
    function() {
      $('>ul.dropBox', this).slideUp();
      $('>a.toggleMenu', this).removeClass('arrowUp');
    }
  );

  // Accordion Toggle
  $('.toggle').on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass('arrowUp');
  });

  // Track browser size in real time, do stuff at certain breakpoints.

  // watch-resize.js
  (function(window) {
    window.watchResize = function(callback) {
      var resizing;
      callback.size = 0;

      function done() {
        var curr_size = window.innerWidth;
        clearTimeout(resizing);
        resizing = null;
        // only run on a true resize
        if (callback.size != curr_size) {
          callback();
          callback.size = curr_size;
        }
      }
      window.addEventListener('resize', function() {
        if (resizing) {
          clearTimeout(resizing);
          resizing = null;
        }
        resizing = setTimeout(done, 50);
      });
      // init
      callback();
    };
  }(window));

  // watch browser width on resize
  var browser_width = 0;
  window.watchResize(function() {
    browser_width = window.innerWidth || document.body.offsetWidth;
  });

  // do stuff after breakpoint
  window.watchResize(function() {
    var threshold = 400;
    if (browser_width >= threshold) {
      $('.listBlock').removeAttr("style");
    }
  });

  // Slick Sliders
  $('.petCarousel').slick({
    appendDots: ".navigationDots",
    // autoplay: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: false,
    initialSlide: 3,
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="sliderPrevBtn"></button>',
    nextArrow: '<button type="button" class="sliderNextBtn"></button>',
    responsive: [{
        breakpoint: 1439,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.testimonialCarousel').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="sliderPrevBtn"></button>',
    nextArrow: '<button type="button" class="sliderNextBtn"></button>'
  });

  $('.aboutUsSlider').slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: '<button type="button" class="sliderPrevBtn"></button>',
    nextArrow: '<button type="button" class="sliderNextBtn"></button>',
    responsive: [{
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
