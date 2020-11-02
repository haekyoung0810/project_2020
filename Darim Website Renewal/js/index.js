

document.write("<script type='text/javascript' src='../js/common.js'><"+"/script>");  
function common(){  

};  //메뉴 내려오기






function moveMenu(num){

	var menuT=$('#menu0'+num).offset().top;
	$('html,body').animate({scrollTop:menuT},800);

}

