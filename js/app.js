$( document ).ready(function(){
	$('.ryu').mouseenter( function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave( function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

	.mousedown( function(){
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css("left",'520px');
			});
		

		
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.hadouken').css("left",557);
	});
	$(document).keydown( function( event ){

		
		if (event.which == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function( event ){
		if (event.which == 88){
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
		}
	});
	

});