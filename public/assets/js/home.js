
function prepPinnedMenu() {
    var pinned = false;
    var headNav = $("#head-nav");
    var offsetTop = headNav.offset().top;

    $(window).bind("scroll", function(){
        var scrollTop = $(this).scrollTop();

        if ((offsetTop - scrollTop) < 1) {
            if (!pinned) {
                headNav.addClass("pinned-nav");
                pinned = true;
            }
        } else {
            if (pinned) {
                headNav.removeClass("pinned-nav");
                pinned = false;
            }
        }
    });
}

function prepQuoteRotation() {
    var footQuotes = $("#foot-quotes");
    var quoteList = footQuotes.find(".foot-quotes-list");
    
    quoteList.find("li:first").addClass("active")
    
    function turn (){
        setTimeout(function(){
            var activeQuote = quoteList.find(".active");
            var nextQuote = activeQuote.next();
            
            if (nextQuote.length == 0) {
                nextQuote = quoteList.find("li:first");
            }

            console.log(nextQuote);
            
            activeQuote.fadeOut(2000, function(){
                activeQuote.removeClass("active");
                nextQuote.show();
                nextQuote.addClass("active");
                turn();
            });
        }, 1000);
    }
    turn();
}

$(function(){
    prepPinnedMenu();
    prepQuoteRotation();
});
