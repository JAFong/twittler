$(document).ready(function() {
	$('.tweet').on('click', 'div', function() {
		$(this).text("Jquery Test");
	});
	$('.refresh').on('click', function() {
		//$('div').css('color', 'red')
		var index = streams.home.length - 1;
		var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo($('.tweet'));
	});
});