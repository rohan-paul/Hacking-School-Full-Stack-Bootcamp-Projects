(function () {
  function calendar(month) {

    //declare few variables
    let padding = "";
    let totalFeb = "";
    let i = 1;

    let current = new Date();
    let cmonth = current.getMonth();
    let day = current.getDate(); // The getDate() is to find which no of days this date is in the MONTH. It returns the day of a date as a number (1-31)
    let year = current.getFullYear();
    let tempMonth = month + 1; // + 1 is used to match up the current month with the correct start date.

    /* A year is leap year if following conditions are satisfied
    1) Year is multiple of 400
    2) Year is multiple of 4 and not multiple of 100. */

    if (month == 1) {
      if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
        totalFeb = 29;
      } else {
        totalFeb = 28;
      }
    }

    let monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let totalDays = ["31", "" + totalFeb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


    // tempDate variable is for finding out the first date of the month, which I will need to find the which weekday this first date falls into, so I can start the weekday accordingly.
    let tempDate = new Date(tempMonth + ' 1 ,' + year);

    /* Above line, will get the first date (date no 1) of this month. The ' 1 ' here, is just a concatenation of a string to tempMonth (NOT a mathematical addition to tempMonth) and just represents that its the 1-st of the month that I am searching for. Note carefully the syntax of the new Date() function here.
    So this syntax, conforms to the syntax given in here (https://stackoverflow.com/a/44747069/1902852)
    < var originalDate = new Date('January 5, 2017 12:00:00'); >
    That is for my above code < new Date(tempMonth + ' 1 ,' + year) > will give me, for example, "Jan 1 2018"

      A> The getDate() method returns the day of a date as a number (1-31):

      B>  last day of a month is -1 day of the 1st day of the following month.
      https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    in other words,

    var FirstDay = new Date(year, month, 1);
    var LastDay = new Date(year, month + 1, 0);

    In the above, I am using 0 for the last day, as days of day in a month is returned as number 1 - 31. So, the -1-th day of the 1st day of the following month will be ( 1 - 1) i.e. zero.
    */

    let tempWeekday = tempDate.getDay(); // tempWeekday is the first day of the month, expressed as a weekday. getDay() returns the day of the week (0-6) for the specified date according to local time.
    let tempWeekday2 = tempWeekday;
    let totalDaysInMonth = totalDays[month];  // here the "month" variable will be a number from 0 to 11 as I pass these numbers in the calendar function 12 times by running the loop through the runCalendar12 function below.

    /* After getting the first day of the week for the month, padding the other days for that week with the previous months days.  i.e. if the first day of the week is on a Thursday, then this fills in Sun - Wed with the last months dates, counting down from the last  day on Wed, until Sunday.
    And because this tempWeekday variable is being modified in the immediately below while loop, I need to have another variable (tempWeekday2) to fill up the calender of the current month after the pre-month days have been padded with premonth class. This tempWeekday2 variable will cycle through values from 0 to 6 and then again back to 0 and then to 6 for each week of a month */
    while (tempWeekday > 0) {
      padding += "<td class='premonth'></td>";
      tempWeekday--;
    }

    // Now fill in the cells / days of individual months
    while (i <= totalDaysInMonth) {

      // After I go past 7 columns (on a zero based index) start a new row with no pre-padding.
      if (tempWeekday2 > 6) {
        tempWeekday2 = 0;
        padding += "<tr></tr>";
      }

      /* Now if i is equal to the current day, make the color of that cell a different color using CSS. Also add a rollover effect to highlight the day the user rolls over. This loop creates the acutal calendar that is displayed.
      For each value of i, create a <td> cell, by accumulating a padding. So, its a great example of how without using createElement() or createTextNode() or innerHTML() I am filling up all the td cells of a table.
      And for the first row, the pre-months td cells have already been taken care of by the previous while loop, where I accumulate padding with the 'premonth' class */
      if (i == day && month == cmonth) {
        padding += "<td class='currentday'  onMouseOver='this.style.background=\"#00FF00\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>" + i + "</td>";
      } else {
        padding += "<td class='currentmonth' onMouseOver='this.style.background=\"#00FF00\"' onMouseOut='this.style.background=\"#FFFFFF\"'>" + i + "</td>";
      }
      tempWeekday2++;
      i++;
    }

    // Now build the whole month's calendar grid (note, I am still in this calendar function, and the below calenderTable variable is the table only for this month out of 12), by adding rows and then td cells and then the padding that we built above, and also putting in the months name and days of the week.
    let calendarTable = "<table class='calendar'> <tr class='currentmonth'><th colspan='7'>" + monthNames[month] + " " + year + "</th></tr>";
    calendarTable += "<tr class='weekdays'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td> <td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
    calendarTable += "<tr>";
    calendarTable += padding;
    calendarTable += "</tr></table>";
    document.getElementById("calendar").innerHTML += calendarTable;
  } //End of function calendar

  // run the calendar function 12 times to generate the full 12 months
  function runCalendar12() {
    for (i = 0; i < 12; i++) {
      calendar(i);
    }
  }

  //Now load window
  if (window.addEventListener) {
    window.addEventListener('load', runCalendar12, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', run12);
  }
})();