//var a = document.getElementById("thedropdown");

var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Handles the Day Drop Down
for(var i = 0; i < 31; i++)
{
	var x = document.getElementById("DayDropOffDropdown");
	var y = document.getElementById("DayPickUpDropdown");
	
	var option = document.createElement("option");
	option.text = i+1;
	x.add(option);
	
	var option = document.createElement("option");
	option.text = i+1;
	y.add(option);
}

// Handles the Month Drop Down
for(var i = 0; i < arrMonths.length; i++)
{
	var x = document.getElementById("MonthDropOffDropdown");
	var y = document.getElementById("MonthPickUpDropdown");
	
	var option = document.createElement("option");
	option.text = arrMonths[i];
	x.add(option);
	
	var option = document.createElement("option");
	option.text = arrMonths[i];
	y.add(option);
}

// Handles the Year Drop Down
var TodaysDate = new Date();
var iTodaysDate = TodaysDate.getFullYear();

var iAmount = 2100-iTodaysDate;

for(var i = 0; i < iAmount; i++)
{
	var x = document.getElementById("YearDropOffDropdown");
	var y = document.getElementById("YearPickUpDropdown");
	
	var option = document.createElement("option");
	option.text = iTodaysDate;
	x.add(option);
	
	var option = document.createElement("option");
	option.text = iTodaysDate;
	y.add(option);
	
	iTodaysDate++;
}

//alert(a.options[2].value);

function CalculatePrice()
{
	document.getElementById("totalprice").innerHTML = "Total Price: ";
	
	var a;
	
	// Day Dropped Off
	a = document.getElementById("DayDropOffDropdown");
	var DayDrop = a.options[a.selectedIndex].value;
	
	b = document.getElementById("MonthDropOffDropdown");
	var MonthDrop = b.selectedIndex;
	
	c = document.getElementById("YearDropOffDropdown");
	var YearDrop = c.options[c.selectedIndex].value;
	
	
	// Day Picking Up
	d = document.getElementById("DayPickUpDropdown");
	var DayPick = d.options[d.selectedIndex].value;
	
	e = document.getElementById("MonthPickUpDropdown");
	var MonthPick = e.selectedIndex;
	
	f = document.getElementById("YearPickUpDropdown");
	var YearPick = f.options[f.selectedIndex].value;
	
	var DateDroppedOff = new Date(YearDrop, MonthDrop, DayDrop);
	var DatePickedUp = new Date(YearPick, MonthPick, DayPick);
	
	//alert(YearDrop + " " + MonthDrop+1 + " " + DayDrop + "<br>" + YearPick + " " + MonthPick+1 + " " + DayPick);
	
	//alert(DateDroppedOff);
	
	//var DifferenceInDays = DatePickedUp.getDate() - DateDroppedOff.getDate();
	var DifferenceInDays = Math.floor((DatePickedUp - DateDroppedOff) / 86400000);
	var DaysTotal = DifferenceInDays;
	
	if(DifferenceInDays <= 7)
	{
		DifferenceInDays = DifferenceInDays * 10;
	}
	else
	{
		var TotalDaysOver7 = DifferenceInDays - 7;
		TotalDaysOver7 = TotalDaysOver7 * 8;
		
		TotalDaysOver7 += 70;
		
		DifferenceInDays = TotalDaysOver7;
	}
	
	document.getElementById("totalprice").innerHTML += "$" + DifferenceInDays.toFixed(2) + " (" + DaysTotal + " Days)";
	
	//var strUser = a.options[a.selectedIndex].value;
	
	
}

//function GetChangedValue(value)
//{
	//alert(value);
//}

var DateFirst = new Date(2017, 5, 6);
var DateSecond = new Date(2017, 6, 9);

var DifferenceInDays = DateSecond.getDate() - DateFirst.getDate();
var diff = Math.floor((DateSecond - DateFirst) / 86400000);

//alert(diff);

var dropdowns = document.getElementsByClassName("dropdown-content");

var i;