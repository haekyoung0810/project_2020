

document.write("<script type='text/javascript' src='../js/common.js'><"+"/script>");  
function common(){  

};  //메뉴 내려오기(공통사항)







function moveMenu(num){

	var menuT=$('#menu0'+num).offset().top;
	$('html,body').animate({scrollTop:menuT},800);

} //앵커







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

});//박카스 소개




//마우스 스크롤
$(function () {
    baloonUp();

    function baloonUp() {
        $('.downArrow').animate({
            'bottom': 15
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.downArrow').animate({
            'bottom': 0
        }, 700, null, baloonUp);
    }
});//아래 화살표








