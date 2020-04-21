$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 107 ) {
        $('.headerMain').addClass('scrolled');
        $('.item').addClass('scrolled');
        $('.main-title').addClass('scrolled');
    }   
    if( scrolled <= 107 ) {     
        $('.headerMain').removeClass('scrolled');
        $('.item').removeClass('scrolled');
        $('.main-title').removeClass('scrolled');
    }
});