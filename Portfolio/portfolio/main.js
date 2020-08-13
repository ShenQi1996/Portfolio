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
            $('html, body').animate( Keyframes:{
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, options: 2000);
        });
    
   $('#up').on('click', function() {
    $('html, body').animate( Keyframes:{
        scrollTop: 0
    }, options: 2000);
    });
    */
   AOS.init({
       easing: 'ease',
       duration: 1000,
       once: true
   });
});