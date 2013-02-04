function easeGrid(id, direction, maxtime) {
	$(".grid#"+id).children().each(function(i, e) {
		$(e).animate({
			opacity: ((direction == "out") ? 0.0 : 0.75)
		}, Math.random()*maxtime);
	});
};

$(".square").hover(function() {
	$(this).animate({
		opacity: 1.0
	}, 50);
},
function() {
	$(this).animate({
		opacity: 0.75
	}, 50);
});

$(".square").each(function (i, e) {
	var url = bucket+$(e).children().text()+"_thumb.png";
	$('<img/>').attr('src', url).load(function() {
	   $(e).css("background-image", "url('"+url+"')");
	});
});