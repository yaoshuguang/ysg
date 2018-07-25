$(document).ready(function() {
 $(".sowing .sowing_box .sow li").eq(0).show().siblings().hide();
    var i = 0;
    var timer;
    showTime();
    
    function showTime(){
        timer = setInterval(function(){
            i++;
            
            if(i == 5){
                i= 0;
            }
            show();
           
        },3000);
    }
    $(".sowing .sowing_box .dot li").hover(function(){
    	
    	clearInterval(timer);
    	var i = $(this).index();
    	$('.sowing .sowing_box .sow li').eq(i).fadeIn(500).siblings().fadeOut(500);
		$('.sowing .sowing_box .dot li').eq(i).addClass('color').siblings().removeClass('color');
    },function(){
    	showTime();
    });
	function show(){
		$('.sowing .sowing_box .sow li').eq(i).fadeIn(500).siblings().fadeOut(500);
		$('.sowing .sowing_box .dot li').eq(i).addClass('color').siblings().removeClass('color')
	}
	//显示与隐藏密码
	var a = true;
	function hs(){
		if (a) {
			$('#pwd').type="text";
			a=false;
			$('.hs').eq(0).value="隐藏";
		}else{
			$('#pwd').type="password";
			a=true;
			$('.hs').eq(0).value="显示";
		}
	}
	function test(){
		var xmlhttp;
		var str = $("#form2 input").eq(0).val();
		if(str.length==0){
			$("#form2 .re").eq(0).innerHTML="";
			return;
		}
		if (window.XMLHttpRequest) {
			xmlhttp= new XMLHttpRequest();
		}else{
			xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function(){
			if (xmlhttp.readyState==4 &&xmlhttp.status==200) {
				$("#form2 .re").eq(0).innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open('post',"")
		
	}
	
});