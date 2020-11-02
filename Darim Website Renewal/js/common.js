
if(matchMedia("screen and (min-width:768px)").matches){




//PC 서브메뉴

$(function(){

	$('#topbox').mouseenter(function(){
		$('.subMenu').css('display','block');
		$('#subLine').css({'height':'270px','transition':'all 0.3s'});

	});

$('#topbox').mouseleave(function(){
	$('.subMenu').css('display','none');
	$('#subLine').css('height','0');



});



});



}else{



// 모바일 trigger
$(document).ready(function(){
 
	$('#trigger').on('click', function(){
		$('#moSubline').show().animate(('margin-left','0'),4000); 
		// $('moSubline').slideUp(('margin-left','0'),4000);  
	});
	$('#trigger02').on('click', function(){
		$('#moSubline').hide().animate(('margin-left','100%'),4000);   
		// $('#moSubline').animate(('margin-left','100%'),4000);  
	});

});



}





