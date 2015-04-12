$(document).ready(function() {
	var username = Object.getOwnPropertyNames(streams.users);
	$('#shawndrost').text('@' + username[0]);
	$('#sharksforcheap').text('@' + username[1]);
	$('#mracus').text('@' + username[2]);
	$('#douglascalhoun').text('@' + username[3]);
	$('.tweet').on('click', 'div', function() {
		$(this).text("Jquery Test");
	});
	$('#userbutton').on('click', function() {
		$('.users').find('div').fadeToggle('slow');
	});
	$('.refresh').on('click', function() {
		var $tweets = $('.tweet');
        $tweets.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo($('.tweet'));
        index -= 1;
    }
     });
});