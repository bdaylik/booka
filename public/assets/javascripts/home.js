// Ömer Büyükoğlu | 2012 @Buyomer

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
        $('a.view-all').hide();
        $('ul.hidden-quotes').fadeIn();

    })

});

$(document).ready(function() {
        $("nav a").anchorAnimate()
        wH = $(window).height();
        $('#intro').css('height',wH+'px');
        $("html,body").animate({ scrollTop: 0 }, 50);
});

jQuery.fn.anchorAnimate = function(settings) {

        settings = jQuery.extend({
                speed : 1100
        }, settings);   
        
        return this.each(function(){
                var caller = this
                $(caller).click(function (event) {      
                        event.preventDefault()
                        var locationHref = window.location.href
                        var elementClick = $(caller).attr("href")
                        
                        var destination = $(elementClick).offset().top;
                        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
                                window.location.hash = elementClick
                        });
                        return false;
                })
        })
}
