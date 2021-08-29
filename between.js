function car()
  {
	var u_year  = document.getElementById("syear").value;
	var u_month = document.getElementById("smonth").value;
	var u_date  = document.getElementById("sdate").value;

u_month=parseInt(u_month);
u_year=parseInt(u_year);
u_date=parseInt(u_date);

  var p_year  = document.getElementById("eyear").value;
  var p_month = document.getElementById("emonth").value;
  var p_date  = document.getElementById("edate").value;

p_month=parseInt(p_month);
p_year=parseInt(p_year);
p_date=parseInt(p_date);

  var mon_days = [31,28,31,30,31,30,31,31,30,31,30,31];


 function disp()
 {
 	alert("PLEASE ENTER PROPER DATE");
 }

 function neg()
{
	alert("negative values not accepted");
}

function y_range()
{
	alert("PLEASE ENTER THE YEAR VALUES FROM THE RANGE 1900---2100");
}

function m_range()
{
	alert("PLEASE ENTER THE MONTH VALUES FROM THE RANGE 1---12");
}

function y_cond()
{
  alert("THE START YEAR SHOULD ALWAYS BE LESS THAN END YEAR");
}

function feb()
{
  alert("FEBRAUARY DOESN'T HAVE MORE THAN 29 DAYS, PLEASE ENTER PROPER DATE!!");
}




  if(u_month==""||u_date==""||u_year==""||p_month==""||p_date==""||p_year=="")
  {
  	alert("PLEASE ENTER ALL THE FIELDS");
    return false;
  }
  else if(((u_month==1||3||5||7||8||10||12)&&(u_date>31))||((u_month==4||6||9||11)&&(u_date>30)))
       return disp();

  else if(((p_month==1||3||5||7||8||10||12)&&(p_date>31))||((p_month==4||6||9||11)&&(p_date>30)))
       return disp();
  	
  else if((u_year%4==0)&&(u_month==2)&&(u_date>29))
      return feb();

  else if((p_year%4==0)&&(p_month==2)&&(p_date>29))
      return feb();

  else if(u_year<0||u_month<0||u_date<0||p_year<0||p_month<0||p_date<0)
  	  return neg();

  else if(u_year>2100||u_year<1900||p_year>2100||p_year<1900)
  	  return y_range();

  else if(u_month<1||u_month>12||p_month<1||p_month>12)
  	  return m_range();
  
  else if(p_year<u_year)
      return y_cond();
  	
  
  

  else
  {
	 
	 var leap_count=0;
	for(var x=u_year+1; x< p_year; x=x+1)
	 {
	 	if(x%4==0)
	 		{
	 			leap_count=leap_count+1;
	 		}
	 
	 }

	var btw_days =(p_year-u_year-1)*365 ;
	btw_days = btw_days + leap_count;

  if(p_year==u_year+1)
  {
    btw_days=0;
  }
  else
  {
    btw_days=btw_days+0;
  }
  if(p_year==u_year+2)
  {
    if((u_year+1)%4==0)
    {
      btw_days=366;
    }
    else
    {
      btw_days=365;
    }
  }
  else
  {
    btw_days=btw_days+0;
  }





	
	var pdays_sum =0;

	for(var x=0; x<p_month-1; x++)
	{
		pdays_sum = mon_days[x] + pdays_sum;
	}

	if(p_year%4==0&&p_month>2)
	{
		pdays_sum++;
	}
	else
	{
		pdays_sum=pdays_sum+0;
	}

	var present_days = pdays_sum + p_date ; 





	var bdays_sum=0;
    for (var x=u_month; x<12; x++)
    {
    	bdays_sum = bdays_sum + mon_days[x];
    }

    var a = mon_days[u_month-1]-u_date +1;

    var born_days = a + bdays_sum;

    if(u_month<3&&u_year%4==0&&u_date<29)
    {
    	born_days++;
    }
    else
    {
    	born_days=born_days+0;
    }

    if(u_month==2&&u_date==29)
    {
    	born_days++;
    }
    else
    {
    	born_days=born_days+0;
    }



    var no_of_days = born_days + btw_days + present_days;

     result.style.color = "white";
     

     if (no_of_days>=0)
     {
     	document.getElementById("result").innerHTML= "The total number of days are " + no_of_days ;
     }
     else
     {
     	document.getElementById("result").innerHTML= '🤦'+"Please Enter Valid Dates"+'&#129335';
     }
	
   

    return true;
    }

}
     
 		$(document).ready(function(){    

		
			  $("#syear,#smonth,#sdate,#edate,#eyear,#emonth").on({
			  	
			  	focus : function()
			  	{
			  	$(this).css("background-color", "#92e895");
			  	$(this).css("font-size", "175%");
			  	},

			  	blur : function()
			  	{
			  	$(this).css("background-color", "white");
			  	$(this).css("font-size", "150%");
			  	}

			  }
			  );	
		
		})
   



