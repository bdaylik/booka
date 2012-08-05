$(document).ready(function(){
	
	var data = eval($("#data").data("quote"));
	var counter = 0;

	if(data.length != 0){ 
		$("#quotedata").html(data[counter]);

		setInterval(function(){
			counter++;
			if(counter == data.length) counter = 0;
			$("#quotedata").html(data[counter]);
		},4000);
	}

	$(".fancybox").fancybox();

	$("#hard").click(function(){
		$("#price").html("$50,34 ");
		$("#datatext").html("HARDCOVER, 2012, $50,34");
	});

	$("#cd").click(function(){
		$("#price").html("$30,13 ");
		$("#datatext").html("CD-AUDIO, 2012, $30.13");
	});

	$("#allquotes").hide();

	$("#trigger").click(function(){
		$("#triggered").click();
	});
	
});