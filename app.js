$(document).ready(allJQuery);

function allJQuery() {
	$('#playingField').append('<div id="ball1" class="greenBall"></div>')
		.append('<div id="ball2" class="greenBall"></div>');
	setInterval(function() {
		console.log("moving right!");
		$('#ball1').css('left', parseInt($('#ball1').css('left'))+10+"px");
	}, 1000);
	setInterval(function() {
		console.log("moving down!");
		$('#ball2').css('top', parseInt($('#ball2').css('top'))+10+"px");
	}, 1000);
}