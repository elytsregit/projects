"use strict";


runClock();
setInterval("runClock()", 1000);

function runClock() {
	

	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	/* DISPLAY THE CURRENT DATE AND TIME */

	document.getElementById("dateNow").innerHTML = "Today: &nbsp;" + dateStr + "&nbsp;" + timeStr;

	/* CALCULATE THE DAYS UNTIL JAN 1ST */

	var newYear = new Date("December, 28 2019");
	var nextYear = currentDay.getFullYear();
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

	/* DISPLAY TIME LEFT UNTIL NYE */

	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}




