var NowImg = 1;  //����������ʾ��ͼƬ
var bStart = 0;  //�Ƿ��ѿ�ʼ����
var bStop =0;    //�Ƿ�����ͣ
var MaxImg=4;    //�������ʾ����ͼƬ


function toggleTo(img)
{
	//��ͣ��ҳclearTimeout(slidint);�޸���ر�������ִͣ��fnToggle() 
	NowImg=img;
	clearTimeout(slidint);
	bStop=1;
	//�Ƚ�4��ͼƬ�����أ�����ʾ���ͣ��������ͼƬ
	document.images['oDIV1'].style.display = "none";
	document.images['oDIV2'].style.display = "none";
	document.images['oDIV3'].style.display = "none";
	document.images['oDIV4'].style.display = "none";
	document.images['oDIV'+img].style.display = "";
}

function fnToggle() 
{
	//�ж��Ƿ�Ϊ������ʾ���һ��ͼƬ
	var next = NowImg + 1;	
	if(NowImg == MaxImg) 
	{
		next = 1;
	}
	//�ж��Ƿ���ͣ��0��ʾδ��ͣ
	if(bStop==0)
	{
        //�ж��Ƿ��ѿ�ʼִ�� 
		if(bStart == 0)
		{
			//����3000ms��ڶ���ִ��fnToggle()����
			bStart = 1;		
			slidint=setTimeout('fnToggle()', 3000);
			return;
		}
		else
		{   //�ڶ���ִ��ʱ�����elseģ�飬��ʼ��ҳ
			oTransContainer.filters[0].Apply();

			document.images['oDIV'+next].style.display = "";
			document.images['oDIV'+NowImg].style.display = "none"; 
			oTransContainer.filters[0].Play(duration=2);
            
			if(NowImg == MaxImg) 
				NowImg = 1;
			else
				NowImg++;
		}
		//�ڶ���ִ��fnToggle()ʱ���е����3000ms���3��ִ��fnToggle()...���ѭ��ִ��fnToggle()
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
	if(!document.getElementById) return;  //�ж��Ƿ���document.getElementById����
	if(!e)                                 //�ж��Ƿ��Ѿ������˱���
	var e=window.event;                    //û�������¼�e
	whichlink=(e.target) ? e.target.id : e.srcElement.id;//��ȡ�¼� ����IE�ͻ��
	obj=document.getElementById(whichlink+"menu");      //��ȡԪ��
	visible=(obj.style.display=="block");               //չ���˵�
	key=document.getElementById(whichlink);             //��ȡԪ��
	keyname=key.firstChild.nodeValue.substring(3);      //��ȡ�ı��ڵ��ǰ�����ַ� �Ժ���ַ�
	if(visible)
	{
		obj.style.display="none";                       //ԭ����չ���ģ����ھ����𣬼�����
		key.firstChild.nodeValue="[+]"+keyname;         //����[+]
	}
	else
	{
		obj.style.display="block";                      //ͬ��
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
 var speed=60; //��ʱ�����ڲ���������Խ���ٶ�Խ��
   var tab=document.getElementById("demo");
   var tab1=document.getElementById("demo1");
   var tab2=document.getElementById("demo2");
   tab2.innerHTML=tab1.innerHTML;          //��demo1�����ݸ��Ƶ�demo2
   function Marquee()//����������
   {  
        //��demo1�±߽��λ�õ���demo�ϱ߽�ʱ
        //�ָ���ԭʼ��״̬
   		tab.scrollTop=(tab.scrollTop+1)%tab1.offsetHeight;
		
   }
   //���ö�ʱ������ָ���������й�������
   var MyMar=setInterval(Marquee,speed); 
   //�������ʱ�����ʱ���ﵽ������ͣ��Ŀ��
   tab.onmouseover=function() {clearInterval(MyMar);};
   //����ƿ�ʱ���趨ʱ������ʼ����
   tab.onmouseout=function() {MyMar= setInterval(Marquee,speed);};
}
