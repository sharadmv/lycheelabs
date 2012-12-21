$(function() {

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
});