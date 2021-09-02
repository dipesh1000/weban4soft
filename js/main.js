//Clicking on "menu" link
(function ($) {
  $('.toggle_btn').on('click', function (e) {
    e.preventDefault();
    console.log($('.toggle_Box').hasClass('active'), "From ACtive class");
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
      console.log(newPos, "From current pos");
      activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
      activeBlock.attr('data-position', currentPos);
      $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
      $(this).attr('data-position', newPos);
    }
  });
})(jQuery);

$(document).ready(function () {
  var owl = $('.services');
  var blog = $('#blogs')
  owl.owlCarousel({
    items: 4,
    // items change number for slider display on desktop
    loop: true,
    autoplay: false,
    nav: true,
  });
  blog.owlCarousel({
    items: 1,
    // items change number for slider display on desktop
    loop: true,
    margin: 10,
    autoplay: false,
    nav: true,
  });
});

$(document).ready(function () {


  $("#tabClass .nav-link").click(function (event) {
    $("#tabClass .nav-link").removeClass("active");
    $(this).removeClass('active');
  });
});

