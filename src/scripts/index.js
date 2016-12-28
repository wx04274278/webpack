require('../styles/index.scss');
var Swiper=require('./common/libs/swiper/swiper.js');
var swiperAn=require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var $=require('./common/libs/zepto-modules/zepto.js');
	  require('./common/libs/zepto-modules/event.js');
	  require('./common/libs/zepto-modules/ajax.js');
	  require('./common/libs/zepto-modules/touch.js');
var IScroll=require('./common/libs/iscroll/iscroll.js');
var myScroll;
var swiper = new Swiper('.swiper-container',{
          onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAn.swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAn.swiperAnimate(swiper); //初始化完成开始动画
          }, 
          onSlideChangeEnd: function(swiper){ 
            swiperAn.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          } 
    });
if(localStorage.tj){
	$('.swiper-container').remove();
	$(".content").show();
}
$('#join').tap(function(){
	localStorage.tj=true;
	$('.swiper-container').remove();
	$(".content").show();
});
function loaded () {
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}
$('footer').find('button').tap(function(){
	$(this).addClass('active').siblings('button').removeClass('active');
	$('#header').html($(this).html());
	$('#scroller').children('ul').eq($(this).index()).show().siblings('ul').hide();
	loaded();
	setTimeout(function(){
		myScroll.scrollTo(0,0);
		myScroll.refresh();
	},100);
});
//---------------------第一部分----------------------
$.get('http://localhost:8080/skill', {}, function(response){
	var str='';
	for(var i=0,len=response.length;i<len;i++){
		str+='<li><img src="images/hyuan.png"><span class="title">'+response[i].category+'</span><p>'+response[i].level+response[i].name+'<br>使用时间：'+response[i].time+'</p></li>';
	}
  	$('.ul-one').html(str);
	loaded();
  	var aImg=$('.ul-one li').find('img');
  	for(var i=0;i<aImg.length;i++){
  		if(i%2==1){
  			aImg[i].src='images/lv.png';
  		}
  	}
	setTimeout(function(){
		myScroll.scrollTo(0,0);
		myScroll.refresh();
	},100);
});
//--------------------第二部分---------------------
$.get('http://localhost:8080/work', {}, function(response){
	var str='';
	for(var i=0;i<response.length;i++){
		str+='<li><img src="'+response[i].src+'"><ul><li>公司名称 ： '+response[i].name+'</li><li>公司性质 ： '+response[i].category+'</li><li>企业规模 ： '+response[i].peoples+'</li><li>职位 ：'+response[i].posts+'</li><li>工作时间 ：'+response[i].time+'</li></ul></li>'
	}
	$('.ul-two').html(str);
});
//---------------------第三部分------------------------------
$.get('http://localhost:8080/project', {}, function(response){
	var str='';
	for(var i=0;i<response.length;i++){
		str+='<li><img src="'+response[i].image+'"><p>网站类型 ： '+response[i].category+'<br>网站名称 : '+response[i].name+'<br>网址 : '+response[i].url+'<br>简介 ：'+response[i].description+'<br>详情 ：'+response[i].detail+'<br>应用技术 ：'+response[i].tech+'<br></p></li>';
	}
	$('.ul-three').html(str);
});