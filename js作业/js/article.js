var NowImg = 1;  //现在正在显示的图片
var bStart = 0;  //是否已开始运行
var bStop =0;    //是否已暂停
var MaxImg=4;    //最多能显示四张图片


function toggleTo(img)
{
	//暂停翻页clearTimeout(slidint);修改相关变量，暂停执行fnToggle() 
	NowImg=img;
	clearTimeout(slidint);
	bStop=1;
	//先将4张图片都隐藏，再显示鼠标停留的那张图片
	document.images['oDIV1'].style.display = "none";
	document.images['oDIV2'].style.display = "none";
	document.images['oDIV3'].style.display = "none";
	document.images['oDIV4'].style.display = "none";
	document.images['oDIV'+img].style.display = "";
}

function fnToggle() 
{
	//判断是否为正在显示最后一张图片
	var next = NowImg + 1;	
	if(NowImg == MaxImg) 
	{
		next = 1;
	}
	//判断是否暂停，0表示未暂停
	if(bStop==0)
	{
        //判断是否已开始执行 
		if(bStart == 0)
		{
			//返回3000ms后第二次执行fnToggle()函数
			bStart = 1;		
			slidint=setTimeout('fnToggle()', 3000);
			return;
		}
		else
		{   //第二次执行时进入此else模块，开始翻页
			oTransContainer.filters[0].Apply();

			document.images['oDIV'+next].style.display = "";
			document.images['oDIV'+NowImg].style.display = "none"; 
			oTransContainer.filters[0].Play(duration=2);
            
			if(NowImg == MaxImg) 
				NowImg = 1;
			else
				NowImg++;
		}
		//第二次执行fnToggle()时运行到这里，3000ms后第3次执行fnToggle()...如此循环执行fnToggle()
		slidint=setTimeout('fnToggle()', 3000);
	}
}
function restar()
	{
			bStop=0;
			fnToggle();
	}
function toggle(whichlink)
{
	if(!document.getElementById) return;  //判断是否有document.getElementById方法
	if(!e)                                 //判断是否已经定义了变量
	var e=window.event;                    //没有则定义事件e
	whichlink=(e.target) ? e.target.id : e.srcElement.id;//获取事件 兼容IE和火狐
	obj=document.getElementById(whichlink+"menu");      //获取元素
	visible=(obj.style.display=="block");               //展开菜单
	key=document.getElementById(whichlink);             //获取元素
	keyname=key.firstChild.nodeValue.substring(3);      //获取文本节点的前三个字符 以后的字符
	if(visible)
	{
		obj.style.display="none";                       //原来是展开的，现在就收起，即隐藏
		key.firstChild.nodeValue="[+]"+keyname;         //加上[+]
	}
	else
	{
		obj.style.display="block";                      //同上
		key.firstChild.nodeValue="[-]"+keyname;
	}
}



function FloatAdv()
{
	var isClick=0;
	var close1 = document.getElementById("close1");
	var close2 = document.getElementById("close2");
	var advf = document.getElementById("advf");
	function CloseAdvfOver()
	{
		close1.style.display="none";
		close2.style.display="block";
		advf.style.display="block";
	}
	
	function CloseAdvfOut()
	{
		if(isClick==0)
		{
			close1.style.display="block";
			close2.style.display="none";
			advf.style.display="block";
		}
	
	}
	function CloseAdvfClick()
	{
		isClick=1;
		close1.style.display="none";
		close2.style.display="none";
		advf.style.display="none";
	}
	close1.onmouseover=CloseAdvfOver;
	close2.onmouseout=CloseAdvfOut;
	close2.onclick=CloseAdvfClick;
}

function Scoll()
{
 var speed=60; //定时器周期参数，数字越大速度越慢
   var tab=document.getElementById("demo");
   var tab1=document.getElementById("demo1");
   var tab2=document.getElementById("demo2");
   tab2.innerHTML=tab1.innerHTML;          //将demo1的内容复制到demo2
   function Marquee()//滚动函数体
   {  
        //当demo1下边界的位置到达demo上边界时
        //恢复最原始的状态
   		tab.scrollTop=(tab.scrollTop+1)%tab1.offsetHeight;
		
   }
   //设置定时器，按指定周期运行滚动函数
   var MyMar=setInterval(Marquee,speed); 
   //鼠标移上时清除定时器达到滚动暂停的目的
   tab.onmouseover=function() {clearInterval(MyMar);};
   //鼠标移开时重设定时器，开始滚动
   tab.onmouseout=function() {MyMar= setInterval(Marquee,speed);};
}
