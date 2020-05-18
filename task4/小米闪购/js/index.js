//秒杀倒计时
//1、获取元素
var hour=document.querySelector('.hour');
var minute=document.querySelector('.minute');
var second=document.querySelector('.second');
var inputTime=+new Date('2020-5-19 00:00:00');//倒计时的结束时间，自己设置时间
countDown();//先调用一次这个函数 防止第一次刷新页面有空白
//2、开启定时器
setInterval(countDown,1000);//1000毫秒，每一秒钟调用一次函数
//3、倒计时-时分秒函数
function countDown(){
   var nowTime=+new Date(); //返回的是当前时间的总的毫秒数
   var times=(inputTime-nowTime)/1000; // times是剩余时间的总的毫秒数
   var h=parseInt(times/60/60%24);
   h=h<10?'0'+h:h;//判断数值小于10的情况 如 0-9改为 00-09
   hour.innerHTML=h;//更改div里面的内容 把h给获取元素hour的内容
   var m=parseInt(times/60%60);
   m=m<10?'0'+m:m;
   minute.innerHTML=m;//同上
   var s=parseInt(times%60);
   s=s<10?'0'+s:s;
   second.innerHTML=s;//同上
}

//小米闪购滑动效果
var fc = 0;
var timer = null;
//点击右侧按钮
$("#fasttitle div a").eq(1).click(function(){
	fc++;
	if (fc==3) {
		$("#fastcontent .right .rcontent").css('left',0);
		fc=1; 
	}
//	计算大div应该滑动到的位置
	var l = fc*-992;
//	让大div滑动过去
	$("#fastcontent .right .rcontent").animate({left:l},500);
})
//点击左侧按钮的效果
$("#fasttitle div a").eq(0).click(function(){
	fc--;
	if (fc==-1) {
		$("#fastcontent .right .rcontent").css('left',-992*2);
		fc=1;
	}
//	计算大div应该滑动到的位置
	var l = fc*-992;
//	让大div滑动过去
	$("#fastcontent .right .rcontent").animate({left:l},500);
})
//鼠标划在窗口上面，停止计时器
$("#fastcontent .right").mouseenter(function(){
	clearInterval(timer);
})
//鼠标离开窗口，开启计时器
$("#fastcontent .right").mouseleave(function(){
	timer=setInterval(run,3000);
})
//鼠标划在标签上面，停止计时器
$("#fasttitle div a").mouseenter(function(){
	clearInterval(timer);
})
//鼠标离开标签上面，开始计时器
$("#fasttitle div a").mouseleave(function(){
	timer=setInterval(run,3000);
})
//定义计时器
timer=setInterval(run,3000);
//封装函数run
function run(){
	fc++;
	if (fc==3) {
		$("#fastcontent .right .rcontent").css('left',0);
		fc=1; 
	}
//	计算大div应该滑动到的位置
	var l = fc*-992;
//	让大div滑动过去
	$("#fastcontent .right .rcontent").animate({left:l},500);
}