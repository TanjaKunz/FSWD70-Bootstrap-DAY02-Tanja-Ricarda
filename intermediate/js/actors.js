$(document).ready(function(){
		
	$('.pic').attr('src', actors[0].pic);
	$('.name').text(actors[0].name);		
	$('.short').text(actors[0].short);		
	$('.films').text(actors[0].films);		
	
	for ( i = 1; i < actors.length; i++) {
		
		$('.box:first').clone().appendTo('#cntBox');

		var img = $('.pic');
		$(img[i]).attr('src', actors[i].pic);		

		var name = $('.name');
		$(name[i]).text(actors[i].name);

		// var id = $(.name[i]).attr('id');
		var name1 = $('.name').attr('id');
		$(name1).append(actors[i].name);

		var short = $('.short');
		$(short[i]).text(actors[i].short);

		var films = $('#filmography');
		$(filmography[i]).text(actors[i].films);
		
	};
	console.log(actors[0].name);
});