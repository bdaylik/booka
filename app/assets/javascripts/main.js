$(document).ready(function(){
    
    // Sticky navbar
    $(function(){
        var toTop = $('.page-nav').offset().top;
        $(document).scroll(function() {
            var currentTop = $(document).scrollTop();
            if(currentTop >= toTop){
                $('.page-nav').addClass('fixed');
            } else {
                $('.page-nav').removeClass('fixed');
            }
        });
        $('.page-nav a').click(function(){
            if ($(this).text() === 'About this book') {
                $('html, body').animate({
                    scrollTop: $('.about-book').offset().top - 62
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $('.favorite-quotes').offset().top - 62
                }, 500);
            }
            return false;
        });
    });
    
    // Custom select box code
    $('select').sSelect();
    $('.action select').change(function(){
        $('.action em').text($('.action select').getSetSSValue());
    });
    
    // Quote fader
    $(function(){
        var $quotes = $('.all-quotes'),
            $qoutesLi = $('.all-quotes li'),
            total = $qoutesLi.length,
            current = 1,
            fade = setInterval(function() {
                $quotes.children('li:nth-child(' + current + ')').animate(
                    {opacity: 0},
                    2000,
                    function() {
                        if (current === total) { current = 1; }
                        current++;
                        $quotes.children('li:nth-child(' + current + ')').animate({opacity: 100}, 2000);
                    }
                );
                $('#show-all-quotes').click(function(){
                    clearInterval(fade);
                    show();
                    return false;
                });
            }, 4000),
            show = function() {
                    $qoutesLi.stop().css({
                        opacity: 100,
                        position: 'static',
                        top: 'auto'
                    });
                    $quotes.animate({height: '100%'}, 1000);
                    $('#show-all-quotes').animate({opacity: 0}, 1000);
            };
    });
    
    // Hide placeholder text
    $(function(){
        $('#input-quote').focusin(function(){
            $(this).prev().hide();
        });
        $('#input-quote').focusout(function(){
            if(!$(this).val()) {
                $(this).prev().show();
            }
        });
    });
    
});