var bucket = "https://s3.amazonaws.com/lycheelabs/";

function easeGrid(id, direction, maxtime, callback) {
	$(".grid#"+id).children().each(function(i, e) {
		$(e).animate({
			opacity: ((direction == "out") ? 0.0 : 0.75)
		}, Math.random()*maxtime);
	});
	callback();
};

$(document).ready(function() {

	var paused = false,
		controldiv = $('#playpause'),
		timer;

	function play() {
		timer = setInterval(function() {
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		}, 5000);
		controldiv.text("Pause ||");
	}

	function pause() {
		clearInterval(timer);
		controldiv.text("Play >");
	}

	if (controldiv) {
		controldiv.click(function() {
			paused = !paused;
			if (paused) {
				pause();
			}
			else {
				play();
			}
		});

		$("#slideshow > div:gt(0)").hide();
		play();
	}

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
		var url = bucket+$(e).attr("id")+"_thumb.png";
		$('<img/>').attr('src', url).load(function() {
		   $(e).css("background-image", "url('"+url+"')");
		   $(e).animate({
				opacity: 0.75
			}, Math.random()*1000);
		});
	});

	$(".navigation").click(function() {
		var destination = $(this).attr('id');
		$(".grid").each(function(i, e) {
			easeGrid($(this).attr("id"), "out", 500, function() {
				window.location.href = "/"+destination;
			});
		});
	});
});
