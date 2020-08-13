

$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
            $('.menu-toggle').removeClass('open');
            $('.top-nav').removeClass('open');
        });
        
    /*  NEED MORE WORK 
    $('.nav a[href*="#"]').on('click', function() {
        
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            },  2000);
        
        });
    */
        /*NEED MORE WORK*/
    $(".nav-list a").on("click", function(){
        var pageId = $(this).attr("data-page");
        $("html, body").animate({
            scrollTop: $("#"+pageId).offest().top }, 2000);
    });

    $('#up').on('click', function() {
       /*
    $('html, body').animate( Keyframes:{
        scrollTop: 0
    }, options: 2000);
    */
        document.documentElement.scrollTop = 0;
    });
    
   AOS.init({
       easing: 'ease',
       duration: 1000,
       once: true
       /* change once will change the web effects*/
   });
});