// Ömer Büyükoğlu | 2012 @Buyomer

$(document).ready(function() {

    //Sticky Navbar
    var hH = $('header').outerHeight();
    function stickyNav() {
        if ($(window).scrollTop() > hH){
                $('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
            }
            else {
                $('nav').removeClass('fixed').next().css('padding-top','0');
            }
        }
        stickyNav();
        $(window).scroll(function(){stickyNav();
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
                }, 4000);
            });
        };
        fadeIt(cur);
    };
    $('ul.quotes').quotesSlide();

    //*** Some cool stuff ***

    //Show All Quotes
    $('a.view-all').click(function(){
        $('ul.quotes').hide();
        $('a.view-all').hide();
        $('ul.hidden-quotes').fadeIn(800);
        $('section#quotes').animate({'height': '600px'}, 500);
    });

    //Like Button
    $('li.like').click(function(){
        $('li.like').css('background', '#fe57a1');
        $('span.liked').fadeIn();
    });



    //Price Changes
    $("#prices").bind("change", function() {
        var onPrice = $('#prices').val();
        $('.price-change').html('Price: $ ' + onPrice);
    });
});
    
//Scroll to Area
$(function() {
    $('nav ul li a').bind('click',function(event){
        var $anchor = $(this);
        var navH = $('nav').attr('class');
        if (navH == 'fixed'){
            $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-30}, 800);
            event.preventDefault();
        }
        else {
            $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-60}, 800);
            event.preventDefault();
        }
    });
});