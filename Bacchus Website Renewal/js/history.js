
document.write("<script type='text/javascript' src='../js/common.js'><"+"/script>");  
function common(){  

};  



//숫자로 보는 박카스

function counter01(){
    var count0 = count1 = count2 = 0;
  
    timeCounter(); 
  
    function timeCounter() {
  
      id0 = setInterval(count0Fn, 12.738853);
  
      function count0Fn() {
        count0++;
        if (count0 > 19) {
          clearInterval(id0);
        } else {
          $(".number").eq(0).text(count0);
        }
  
      }
  
      id1 = setInterval(count1Fn, 10.13171226);
  
      function count1Fn() {
        count1++;
        if (count1 > 61) {
          clearInterval(id1);
        } else {
          $(".number").eq(1).text(count1);
        }
      }

    }



}

function counter02(){

   
var count0 = count1 = count2 = 0;
  
timeCounter2(); 

function timeCounter2() {

  id0 = setInterval(count0Fn, 12.738853);

  function count0Fn() {
    count0++;
    if (count0 > 20) {
      clearInterval(id0);
    } else {
      $(".number").eq(0).text(count0);
    }

  }

  id1 = setInterval(count1Fn, 10.13171226);

  function count1Fn() {
    count1++;
    if (count1 > 05) {
      clearInterval(id1);
    } else {
      $(".number").eq(1).text('0'+count1);
    }
  }

}


}

function counter03(){    
    var count0 = count1 = count2 = 0;
  
    timeCounter(); 
  
    function timeCounter() {
  
      id0 = setInterval(count0Fn, 12.738853);
  
      function count0Fn() {
        count0++;
        if (count0 > 20) {
          clearInterval(id0);
        } else {
          $(".number").eq(0).text(count0);
        }
  
      }
  
      id1 = setInterval(count1Fn, 10.13171226);
  
      function count1Fn() {
        count1++;
        if (count1 > 13) {
          clearInterval(id1);
        } else {
          $(".number").eq(1).text(count1);
        }
      }

    }

}

$(function() {

    setTimeout('counter01()',0);
    //    1061


        setTimeout(function(){
            $('.numTextBx img').attr('src','../img/sorce/sub1/bacchusd_d-2005.png');
            $('.numTextBx .text01').text('박카스D 발매');
            $('.numTextBx .text02').text('박카스 주성분인 타우린을');
            $('.numTextBx .text03').text(' 1000mg에서 2000mg으로 보강');
        },800);
            
   
    setTimeout('counter02()',1600); //2005


        setTimeout(function(){
            $('.numTextBx img').attr('src','../img/sorce/sub1/222product-bacchusd-f-2013.png');
            $('.numTextBx .text01').text('박카스F 발매');
            $('.numTextBx .text02').text('박카스-F(Forte) 리뉴얼 발매');
            $('.numTextBx .text03').text('패키지 디자인 변경');
        },2400);
            
   
    setTimeout('counter03()',3200); //2013




        
  });


