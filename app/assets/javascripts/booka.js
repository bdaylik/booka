var app = {

	init: function(){
		var _this = this;
		$(document).ready(function(){
			_this.selectBox();
			_this.sticky();
			_this.scroller();
			_this.quotes();
			_this.supportTransforms();
		});
	},

	supportTransforms: function () {
		if ('WebkitPerspective' in document.body.style 
		 || 'MozPerspective' in document.body.style 
		 || 'perspective' in document.body.style) 
		{
		    $('html').addClass('csstransforms3d');
		}

	},
	selectBox: function(){
		//open list
		$('.selectBox').click(function(){
			var $elm = $(this);
			$elm.next().toggle();
			$elm.toggleClass('open');
		});
		//update price and hide list
		$('.selectList').find('li').click(function(){
			var $item = $(this);
			var $par = $item.parent();
			var $box = $par.prev();
			//get values
			var price = $item.attr('data-price');
			var value = $item.children('span').html();

			$box.children('span').html(value);
			$('#bookPrice').html(price);

			//toggle
			$par.hide();
			$box.removeClass('open');

		});
	},

	sticky: function(){
		var _this = this;
		var $container = $('#navbarContainer');
	    var containerTop = $container.offset().top;
	    var containerHeight = $container.innerHeight();

	    //fake div, for dancing bug
	    var $fakeDiv = $('<div />').css({'width': '1px', 'display': 'none', 'height': containerHeight});
	    $container.after($fakeDiv);
	    //scroll event
		$(window).scroll(function(){
			_this.sticky_do(containerTop);
		});
	},

	sticky_do: function(containerTop){
	  var $container = $('#navbarContainer');
	  var $fakeDiv = $container.next();
	  var scHeight = $(window).scrollTop();

	  if(scHeight > containerTop){
	  	$container.css({'position': 'fixed', 'top': 0, 'left': 0, 'right': 0});
	  	//show fake div
	  	$fakeDiv.show();
	  }else{
	  	$container.css({'position': 'static'});	
	  	//hide fake div
	  	$fakeDiv.hide();
	  }
	},

	scroller: function(){
	    var containerHeight = $('#navbarContainer').innerHeight();

		$('#navbar').find('a').click(function(){
			var target = $(this).attr('href');
			var $target = $(target);
			var scHeight = $target.offset().top - containerHeight;
			$('html, body').animate({
			    scrollTop: scHeight
			}, 500);	

			return false;		
		});
	},

	quotes: function(){
		var $childs = $('#quoteContainer').children();
		var $first = $childs.first();
		$first.addClass('activeQuote').show();

		var $elm;
		var $next;
		var timer = setInterval(function(){
			$elm = $('.activeQuote');
			$next = $elm.next();				

			if($next.length == 0){
				$next = $first;
			}

			$next.addClass('activeQuote').fadeIn();
			$elm.removeClass('activeQuote').hide();
		}, 4000);

		$('#allQuotesBut').click(function(){
			$(this).hide();
			clearInterval(timer);
			$childs.show();
			return false;
		});
	}
};
app.init();