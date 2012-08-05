$(document).ready(function() {

        var aboveHeight = $('header').outerHeight();
        function stickyNav() {
                if ($(window).scrollTop() > aboveHeight){
                        $('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
                } else {
                        $('nav').removeClass('fixed').next()
                        .css('padding-top','0');
                }
        }
        stickyNav();
        $(window).scroll(function(){
                stickyNav();
        });


        //QuoteSlides
        $.fn.quotesSlide = function () {
            var $this = this,
            cur = 0,
            fadeIt = function( which ) {
                    var li = $this.find('li');
                    cur = which = (which >= li.length) ? 0 : which;
                    li.fadeOut(100);
                    li.eq( which ).delay(100).fadeIn(1000, function(){
                        setTimeout(function() {
                            cur++;
                            fadeIt( cur );
                    }, 3000);
                });
            };
            fadeIt(cur);
    };
    $('ul.quotes').quotesSlide();

    $('a.view-all').click(function(){
        $('ul.quotes').hide();
        $('ul.hidden-quotes').fadeIn();
    })

});


$("nav ul li a").click(function(e){
    $('html, body').animate({scrollTop:$('#DIV_ID').offset().top - 20}, 'slow');
});