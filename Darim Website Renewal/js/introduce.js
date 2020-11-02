
document.write("<script src='../js/common.js'><"+"/script>");  
function common(){  

};  


var autocall;
var num=0;
function flowImg(){
	'use strict';
	num++; //1씩 증가
	
	//맨 처음 이미지를 맨뒤로 이동(무한반복)
    var liHig=$('.garlleryList>li').height();
	if(num>=liHig){
			$('.garlleryList').append($('.garlleryList>li').first());
			num=0;
	}
	$('.garlleryList').css('top',-num+'px');
	
}//flowImg




$(function(){
    'use strict';
    autocall=setInterval('flowImg()',30);
	$('.garlleryList').mouseenter(function(){
	clearInterval(autocall);
	});

	$('.garlleryList').mouseleave(function(){
        autocall=setInterval('flowImg()',30);
	});


});
