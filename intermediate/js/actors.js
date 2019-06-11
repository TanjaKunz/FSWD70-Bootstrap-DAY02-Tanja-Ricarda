$(document).ready(function(){
		
	$('.pic').attr('src', actors[0].pic);
	$('.name').text(actors[0].name);		
	$('.short').text(actors[0].short);		
	$('.films').text(films[0].films);		
	
	for ( i = 1; i < actors.length; i++) {
		
		$('.box:first').clone().appendTo('#films');

		var img = $('.pic');
		$(img[i]).attr('src', actors[i].pic);

		var movie = $('.movie');
		$(movie[i]).text(actors[i].name);

		var short = $('.short');
		$(short[i]).text(actors[i].short);

		var films = $('#filmography');
		$(filmography[i]).text(data[i].films);
		
	};
}