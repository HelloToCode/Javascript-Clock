function timeUp()
{
	// Geting Hours / Minuts / Seconds
	var dt = new Date();
	var hours = dt.getHours();
	var min = dt.getMinutes();
	var sec = dt.getSeconds();
	var status = document.getElementById("status");
	
	// Changing AM/PM Status
	if(hours >= 12)
	{
	status.innerHTML = "PM";
	}
	else
	{
		status.innerHTML = "AM";
	}
	
	// Disable 24 Hours Format
	if(hours > 12)
	{
		hours = hours - 12;
	}
	
	// Setting The Values In Our Spans
	var h = document.getElementById("h").innerHTML=hours;
	var m = document.getElementById("m").innerHTML=min;
	var s = document.getElementById("s").innerHTML=sec;
}

	// Updating The Time In Every 1 Second
	setInterval(timeUp,1000);