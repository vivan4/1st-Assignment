function stringvowel()
{
	var str=document.getElementById("id1").value;
	var count=0;
	var a=0, e=0,i=0, o=0, u=0;
	
		for(var j=0; j<str.length; j++)
		{
				if((str[j]=='a'))
				{
					a=a+1;
					
				}
				if((str[j]=='e'))
				{
					e=e+1;
					
				}if((str[j]=='i'))
				{
					i=i+1;
					
				}if((str[j]=='o'))
				{
					o=o+1;
					
				}if((str[j]=='u'))
				{
					u=u+1;
					
				}
		}
	document.getElementById("sp1").innerHTML=a;
	document.getElementById("sp2").innerHTML=e;
	document.getElementById("sp3").innerHTML=i;
	document.getElementById("sp4").innerHTML=o;
	document.getElementById("sp5").innerHTML=u;
}
function colorchange(this)
{
	var inputVal = document.getElementById("id1").style.backgroundColor = "yellow";
	var inputVal = document.getElementById("id1").style.color="red";
	
}
function colorchange2(this)
{
	var inputVal = document.getElementById("id1").style.backgroundColor = "white";
	var inputVal = document.getElementById("id1").style.color="black";
	
}

