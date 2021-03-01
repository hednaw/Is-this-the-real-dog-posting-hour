var currentDate = new Date()
var currentTime = currentDate.getHours()
var current_Time_12_h_format = currentTime % 12
var amorpm; // Is it AM or PM 


if (currentTime < 13) {
	amorpm = "AM"
} else {
	amorpm = "PM"
}

var final_time_12_h_format = current_Time_12_h_format + " " + amorpm;
var final_time = currentTime;

document.getElementById("time12hformat").innerHTML = final_time_12_h_format + " is a Real Dog Posting hour!!!11";

document.getElementById("time24hformat").innerHTML = final_time;

