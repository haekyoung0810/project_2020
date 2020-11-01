

$(function(){

	$('nav').mouseenter(function(){
		$('.subMenuBox').css('display','block');
		$('#subLine').css({'height':'140px','transition':'all 0.5s'});

	});

$('nav').mouseleave(function(){
	$('.subMenuBox').css('display','none');
	$('#subLine').css('height','0');



});



});


