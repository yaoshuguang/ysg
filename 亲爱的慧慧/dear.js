$(document).ready(function(){
    $(".ig li").eq(0).show().siblings().hide();
    var i = 0;
    var timer;
    showTime();
    
    function showTime(){
        timer = setInterval(function(){
            i++;
            
            if(i == 8){
                i= 0;
            }
            show();
        },3000);
    }
    
    $(".ig li").hover(function (){
        clearInterval(timer);
    },function(){
        showTime();
    });
    $(".leftBtn").on('click' , function(){
        clearInterval(timer);
        if(i == 0){
            i = 8;
        }
        i--;
        show();
        showTime();
    });
    $(".rightBtn").on('click', function(){
        clearInterval(timer);
        if(i == 7){
            i = -1;
        }
        i++;
        show();
        showTime();

    });
    $(".lis").hover(function(){
        clearInterval(timer);
        i = $(this).index();
        show();
        showTime();

    });
        
    function show(){
        $(".ig li").eq(i).fadeIn(400).siblings().fadeOut(400);
        $(".list li").eq(i).addClass("red").siblings().removeClass("red");        

    }

});