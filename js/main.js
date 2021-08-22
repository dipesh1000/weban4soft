//Clicking on "menu" link
(function($) {
    $('.toggle_btn').on('click', function(e) {
        e.preventDefault();
        console.log($('.toggle_Box').hasClass('active'), "From ACtive class");
        var toggle = $(this).add('.toggle_Box');
        toggle.toggleClass('active'); 
      });
})(jQuery);

$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
    loop:true,
    margin:10,
    autoplay:false,
    nav: true,
});
});

$(document).ready(function(){

  
  $("#tabClass .nav-link").click(function(event){
      $("#tabClass .nav-link").removeClass("active");
      $(this).removeClass('active');
  });
});