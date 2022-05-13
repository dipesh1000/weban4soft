//Clicking on "menu" link
(function ($) {
  $('.toggle_btn').on('click', function (e) {
    e.preventDefault();
    console.log($('.toggle_Box').hasClass('active'), 'From ACtive class');
    var toggle = $(this).add('.toggle_Box');
    toggle.toggleClass('active');
  });
})(jQuery);

(function ($) {
  $('.testinomial_container').on('click', function (e) {
    e.preventDefault();
    var active = $(this).hasClass('active');
    var className = $('.testinomial_content_img').attr('class');
    var parent = $(this).parents('.testinomial_box');
    if (!active) {
      var activeBlock = parent.find('.testinomial_container.active');
      var activeBlock = parent.find('.testinomial_container.active');
      var currentPos = $(this).attr('data-position');
      var newPos = activeBlock.attr('data-position');
      console.log(newPos, 'From current pos');
      activeBlock
        .removeClass('active')
        .removeClass(newPos)
        .addClass('inactive')
        .addClass(currentPos);
      activeBlock.attr('data-position', currentPos);
      $(this)
        .addClass('active')
        .removeClass('inactive')
        .removeClass(currentPos)
        .addClass(newPos);
      $(this).attr('data-position', newPos);
    }
  });
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 900) {
      $('.we_serve_slider').addClass('weServe owl-carousel owl-theme');
    } else if (ww >= 901) {
      $('.we_serve_slider').removeClass('weServe owl-carousel owl-theme');
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
})(jQuery);

$(document).ready(function () {
  var owl = $('.services');
  var blog = $('#blogs');
  var weServe = $('.weServe');
  var banner = $('.mainbanner');
  var philosophy = $('#philosophy_slide');
  var facts = $('#facts_slider');
  owl.owlCarousel({
    items: 4,
    // items change number for slider display on desktop
    loop: true,
    autoplay: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      750: {
        items: 3,
      },
      900: {
        items: 4,
      },
    },
  });
  blog.owlCarousel({
    items: 1,
    // items change number for slider display on desktop
    loop: true,
    margin: 10,
    autoplay: false,
    nav: true,
  });
  weServe.owlCarousel({
    margin: 10,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      750: {
        items: 5,
      },
      900: {
        items: 6,
      },
    },
  });
  banner.owlCarousel({
    items: 1,
    // items change number for slider display on desktop
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 2000,
    autoplay: false,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
  });
  philosophy.owlCarousel({
    margin: 20,
    dots: false,
    nav: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      750: {
        items: 4,
      },
      900: {
        items: 4,
      },
    },
  });
  facts.owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      900: {
        items: 2,
      },
    },
  });
});

// jQuery(document).ready(function ($) {
//   var alterClass = function () {
//     var ww = document.body.clientWidth;
//     if (ww < 600) {
//       $('.we_serve_slider').addClass('weServe owl-carousel owl-theme');
//     } else if (ww >= 601) {
//       $('.we_serve_slider').removeClass('weServe');
//     }
//   };
//   $(window).resize(function () {
//     alterClass();
//   });
//   alterClass();
// });

$(document).ready(function () {
  $('#tabClass .nav-link').click(function (event) {
    $('#tabClass .nav-link').removeClass('active');
    $(this).removeClass('active');
  });
});
