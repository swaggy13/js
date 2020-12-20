
function CheckId()
{ 
	//获取文本框的值
	str=document.myform.id.value;
	
	//文本框是否为空
	if(str=="")
	{
		document.getElementById('myform').childNodes[0].childNodes[2].nodeValue="null";
		return false;
	}
	//不为空，则判断文本框的值格式是否正确
	else
	{
		var reg=/[^A-Za-z0-9_]/g ;
		if (reg.test(str))
		{ 
		
			document.getElementById('myform').childNodes[0].childNodes[2].nodeValue="wrong";
			//document.getElementById('myform').childNodes[0].childNodes[2].color="red";
			return false; 
		
		}
		else
		{ 
	  	    document.getElementById('myform').childNodes[0].childNodes[2].nodeValue="correct";
			return true;
			
		} 
	}
}


function CheckPsw()
{
	str=document.myform.password1.value;
	if(str=="")
	{
		document.getElementById('myform').childNodes[1].childNodes[2].nodeValue="null";
		return false;
	}
	else if(str.length<6)
	{
		document.getElementById('myform').childNodes[1].childNodes[2].nodeValue="password is less then 6 ";
	}
	else 
	{
		var reg=/[^A-Za-z0-9]/g ;
	
		if (reg.test(str))
		{ 
			document.getElementById('myform').childNodes[1].childNodes[2].nodeValue="wrong";
		//document.getElementById('myform').childNodes[0].childNodes[2].color="red";
			return false; 
		
		}
		else
		{ 
		    document.getElementById('myform').childNodes[1].childNodes[2].nodeValue="correct";
			return true;
		
		} 
	}
	
	
}


function RecheckPsw()
{
	str1=document.myform.password1.value;
	str2=document.myform.password2.value;
	if(str2=="")
	{
		document.getElementById('myform').childNodes[2].childNodes[2].nodeValue="null";
		return false;
	}
	else if(str1==str2)
	{
		document.getElementById('myform').childNodes[2].childNodes[2].nodeValue="correct";
		return true;
	}
	else
	{
		document.getElementById('myform').childNodes[2].childNodes[2].nodeValue="input does not match";
	}
	
}


function CheckName()
{
	str=document.myform.name.value;
	if(str=="")
	{
		document.getElementById('myform').childNodes[3].childNodes[2].nodeValue="null";
		return false;
	}
	else
	{
		for(i=0;i<str.length;i++)
		{
      		var ftext = str.substring(i,i+1);
      		if(ftext <=9 || ftext >= 0)
			{
				document.getElementById('myform').childNodes[3].childNodes[2].nodeValue="input can't contain any number";
				return false;
			}
			
		}
		document.getElementById('myform').childNodes[3].childNodes[2].nodeValue="correct";
		return true;
	}
}


function CheckEmail()
{
	str=document.myform.email.value;
		
	if(str=="")
	{
		document.getElementById('myform').childNodes[5].childNodes[2].nodeValue="null";
		return false;
	}
	else
	{
		var reg=/^[\w\.\-]+@([\w\.-]+\.)+[a-zA-Z]+$/;
		if (reg.test(str))
		{ 
		    document.getElementById('myform').childNodes[5].childNodes[2].nodeValue="correct";
			return true;
		
		}
		else
		{   
			document.getElementById('myform').childNodes[5].childNodes[2].nodeValue="wrong";
			//document.getElementById('myform').childNodes[0].childNodes[2].color="red";
			return false; 
		} 
	}

}

function CheckProtocol()
{
	str=document.myform.protocol.checked;
	//if(str)
	//{
		//return true;
	//}
	//else
	//{
		//return false;
	//}
	return str;
}

function Submit()
{
	var isAllRight=CheckId()&&CheckPsw()&&RecheckPsw()&&CheckName()&&CheckEmail()&&CheckProtocol();
	
	if(isAllRight)
	{
		document.location.href="welcome.html";
		return true;
		 
	}
	else if(!CheckProtocol())
	{
		alert("You didn't agree the protocols.");
		return false;
	}
	else
	{
		alert("Information not match,you can't submit!");
		return false;
	}
}