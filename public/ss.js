$(document).ready(function() {
    alert('dde')
        var aboveHeight = $('header').outerHeight();
        function stickyNav() {
                if ($(window).scrollTop() > aboveHeight){
                $('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
                } else {
                $('nav').removeClass('fixed').next()
                .css('padding-top','0');
                }
        }

        $(window).scroll(function(){
            alert('scr')
        stickyNav();
        });
});


$("nav ul li a").click(function(e){
    $('html, body').animate({scrollTop:$('#DIV_ID').offset().top - 20}, 'slow');
});