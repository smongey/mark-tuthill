var colors = ['#c1b49a', '#90bcc6', '#d09577'];

$(document).ready(function(){

	$('h1').mouseover(function(){
		var randomColor = colors[Math.floor(Math.random() * colors.length)];
		$('body.brown').css('background', randomColor);
	});

});