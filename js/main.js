//Clicking on "menu" link
(function($) {
    $('.toggle_btn').on('click', function(e) {
        e.preventDefault();
        console.log($('.toggle_Box').hasClass('active'), "From ACtive class");
        var toggle = $(this).add('.toggle_Box');
        toggle.toggleClass('active'); 
      });
})(jQuery);