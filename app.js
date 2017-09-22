console.log('ready');
$(document).ready(function(e) {

function Ball(background-color, height, width, borderRadius, position) {
	this.background-color = 
	this.height = 
	this.width =
	

}

var $ball = $("<div>", {id: "ballOne"});
	$($ball).css({'background-color' : 'green', 'height' : '100px', 'width' : '100px', 'borderRadius' : '50%', 'position' : 'absolute'});
	$('#playingField').append($ball);

var $ball2 = $("<div>", {id: "ballTwo"});
	$($ball2).css({'background-color' : 'green', 'height' : '100px', 'width' : '100px', 'borderRadius' : '50%', 'position' : 'absolute'});
	$('#playingField').append($ball2);



setInterval(function() {
	$('#ballOne').animate({
		'marginLeft' : "+=10px",
		'marginTop'  : "+=10px"
		}, 1000);
	}, 1000);

setInterval(function() {
	$('#ballTwo').animate({
		'marginLeft' : "+=10px",
		'marginTop'  : "+=10px"
		}, 1000);
	}, 1000);

function moveDown() {

}


});