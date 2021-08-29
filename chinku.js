

function calculate()

  {

      var D =  new Date();
	var p_month = D.getMonth() + 1;
	var p_date = D.getDate() ;
	var p_year = D.getFullYear() ;

	
	var u_year = document.getElementById("year").value;
	var u_month= document.getElementById("month").value;
	var u_date = document.getElementById("date").value;
	u_month=parseInt(u_month);
	u_year=parseInt(u_year);
	u_date=parseInt(u_date);

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
	alert("PLEASE ENTER THE YEAR VALUES FROM THE RANGE 1901---2019");
}

function m_range()
{
	alert("PLEASE ENTER THE MONTH VALUES FROM THE RANGE 1---12");
}


  if(u_month==""||u_date==""||u_year=="")
  {

  	alert("PLEASE ENTER ALL THE FIELDS");
  	return false;
  }
  else if(((u_month==1||3||5||7||8||10||12)&&(u_date>31))||((u_month==4||6||9||11)&&(u_date>30)))
        disp();
  	
  else if((u_year%4==0)&&(u_month==2)&&(u_date>29))
        disp();

  else if(u_year<0||u_month<0||u_date<0)


  	    neg();

  else if(u_year>2019||u_year<1901)
  	    y_range();

  else if(u_month<1||u_month>12)
  	    m_range();

  	
  
  

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

	var present_days = pdays_sum + p_date; 





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


    var no_of_days= born_days + btw_days + present_days;

     result.style.color = "white";
     

    if (no_of_days>=0)
    {
    	
    	document.getElementById("result").innerHTML= "Heyy!! You Lived " +  no_of_days +" Days "+ ' &#127881;';
    	
    }
    else
    {
  
    	document.getElementById("result").innerHTML= "Please Enter Valid DOB";
    	
    }
	
   

    return true;
    }

}
 		$(document).ready(function(){    

		
			  $(".num").on({
			  	
			  	focus : function()
			  	{
			  	$(this).css("background-color", "#92e895");
			  	$(this).css("font-size", "250%");
			  	},

			  	blur : function()
			  	{
			  	$(this).css("background-color", "white");
			  	$(this).css("font-size", "225%");
			  	}

			  }
			  );	
		
		})


