$(document).ready(function() {
	var username = Object.getOwnPropertyNames(streams.users);
	$('#shawndrost').text('@' + username[0]);
	$('#shawndrost').on('click', function() {
		var $tweets = $('.tweet');
        $tweets.html('');
		var index = streams.users.shawndrost.length - 1;
		while(index >= 0){
			var tweet = streams.users.shawndrost[index];
			var $tweet = $('<div></div>');
			$tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at)
			$tweet.appendTo($('.tweet'));
			index -= 1;
		}
	});

	$('#sharksforcheap').text('@' + username[1]);
	$('#sharksforcheap').on('click', function() {
		var $tweets = $('.tweet');
        $tweets.html('');
		var index = streams.users.sharksforcheap.length - 1;
		while(index >= 0){
			var tweet = streams.users.sharksforcheap[index];
			var $tweet = $('<div></div>');
			$tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at)
			$tweet.appendTo($('.tweet'));
			index -= 1;
		}
	});

	$('#mracus').text('@' + username[2]);
	$('#mracus').on('click', function() {
		var $tweets = $('.tweet');
        $tweets.html('');
		var index = streams.users.mracus.length - 1;
		while(index >= 0){
			var tweet = streams.users.mracus[index];
			var $tweet = $('<div></div>');
			$tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at)
			$tweet.appendTo($('.tweet'));
			index -= 1;
		}
	});

	$('#douglascalhoun').text('@' + username[3]);
	$('#douglascalhoun').on('click', function() {
		var $tweets = $('.tweet');
        $tweets.html('');
		var index = streams.users.douglascalhoun.length - 1;
		while(index >= 0){
			var tweet = streams.users.douglascalhoun[index];
			var $tweet = $('<div></div>');
			$tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at)
			$tweet.appendTo($('.tweet'));
			index -= 1;
		}
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
        $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
        $tweet.appendTo($('.tweet'));
        index -= 1;
    }
     });
});