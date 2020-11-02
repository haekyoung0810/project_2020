

  $(function(){
	'use strict'

var ham=0; //메뉴상단 닫힘
$('#mobileBx').css('margin-left','100%');
$('#trigger').click(function(){
	if(ham===0){ //메뉴 닫혔을 때
		$('#mobileBx').animate({'margin-left':'0'},300);
		$('#trigger02').show();
		$('#trigger>img').hide();
		ham=1; //메뉴 열렸을 때
	}
// else if(ham===1){//메뉴 열렸다면

$('#trigger02').click(function(){

	$('#mobileBx').animate({'margin-left':'100%'},300);

	ham=0;//메뉴 닫힘상태
		$('#trigger>img').show();
		$('#trigger02').hide();


});

// }


});

setInterval(4000);


});




$(function(){
    $('.right').click(function(){
        $('.cont2_1ImgBx').prepend($('.cont2_1ImgBx>li').last())
                $('.bacCopyCont').prepend($('.bacCopyCont>li').last())
        });

    }); //오른쪽 버튼 클릭시

$(function(){
    $('.left').click(function(){
        var first=$('.cont2_1ImgBx>li').first();
        $('.cont2_1ImgBx').append(first);

        var first2=$('.bacCopyCont>li').first();
        $('.bacCopyCont').append(first2);


    }); //왼쪽 버튼 클릭 시

}); 
