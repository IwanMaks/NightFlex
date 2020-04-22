$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 107 ) {
        $('.headerMain').addClass('scrolled');
        $('.item').addClass('scrolled');
        $('.main-title').addClass('scrolled');
        $(".logo").attr("src", "/img/logo-black.png");
    }   
    if( scrolled <= 107 ) {     
        $('.headerMain').removeClass('scrolled');
        $('.item').removeClass('scrolled');
        $('.main-title').removeClass('scrolled');
        $(".logo").attr("src", "/img/logo.png");
    }
});