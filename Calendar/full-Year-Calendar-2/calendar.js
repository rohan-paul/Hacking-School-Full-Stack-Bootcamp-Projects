const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < 12; i++) {
  //create a table for each month
  let div = document.createElement('div');
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let title = document.createElement('h2');

  /* A> Get the weeks (which is an array of objects) for a given month. So createCalendar() will return me an array of weeks. For example say, it will give me 5 weeks for this months. Each of those weeks is an array of objects. So, the result variable is a 2-D Array.
  B> So first iterate through the week, and then in turn, just like a 2-D array access each of the cells of each week */
  let calendar = createCalendar(2018, i);

  // Start iterating through the 2-D array of result variable that was returned from createCalendar
  for (var j = 0; j < calendar.length; j++) {
    //create table rows for each week and assign this current element of result array to a new "week" variable .
    let tr = document.createElement('tr');
    let week = calendar[j];

    // Iterate the inner array of the 2D result array, which is the days of each individual weeks.
    for (var k = 0; k < week.length; k++) {
      let td = document.createElement('td');
      let day = week[k];  // note each element of week is an object, so this 'day' will be assigned that particular object.

      // set this day of the month (as a number from 1 to 31) as table cell textContent
      td.textContent = day.date.getDate();

      // add to this cell the before after class if the condition in the object (defined below in createCalendar function) is satisfied
      day.before && td.classList.add('before');
      day.after && td.classList.add('after');

      // And now that the cell is fully prepared with textContent and class, mount the table cell to this row.
      tr.appendChild(td);

      // Note that here at this point, I am still inside the inner loop, and so, will continue to append all the td's to the row.
    }
  // And now, I am in the outer array, and all the tds for this row, has been appended above inside the inner array. So, now work on this row is completely done and hence, mount this row to the tbody;
  tbody.appendChild(tr);
  }
  // create and populate the thead of each month with weekday names
  thead.innerHTML = '<tr><td>' + 'Su Mo Tu We Th Fr Sa'.split(' ').join('</td><td>') + '</td></tr>';

  // mount thead and tbody
  table.appendChild(thead);
  table.appendChild(tbody);

  // Prepare the title with months names
  title.innerHTML = MONTHS[i];

  // mount the title and table itself to the div
  div.appendChild(title);
  div.appendChild(table);

  document.body.appendChild(div);
}

/*A> This createCalender function will be run 12 times, creating each day staring from firstSunday to lastSaturday of this current month's DOM table.
Each row is represented by the variable "week" which is an array of objects (key-value pair, )
B> The createCalendar() finally will return the variable result, which is an array of weeks */

function createCalendar(year, month) {
  let results = [];

  //find last and first days of month
  let firstDate = new Date(year, month, 1);
  let lastDate = new Date(year, month + 1, 0);

  //Find fist sunday and last saturday from handler function
  let firstSunday = getFirstSunday(firstDate);
  let lastSaturday = getLastSaturday(lastDate);

  // Start iterating from first sunday of this current months where i = 0
  let iterator = new Date(firstSunday);
  let i = 0;

  //..until last saturday
  while (iterator <= lastSaturday) {
    // first sunday of this month is i = 0 and the consecutive sundays will fall on i = 7 then 14 then 21.
    if ( i++ % 7 === 0 ) {
      // start a new week when I hit the next sunday
      var week = [];
      results.push(week);
    }
    // push individual days of the month to week by inserting into array "week" an object of key-value pairs. So with each iteration, I am creating an object inside of the push() method. So the syntax is like - myArray.push({ })
    week.push({
      date: new Date(iterator),
      before: iterator < firstDate, // add indicator if before current month
      after : iterator > lastDate  // add indicator if after current month
    });
    // Increment iterator to move to next date
    iterator.setDate(iterator.getDate() + 1);
  }
  return results;
} // createCalendar() functions ends here

//Given the first date of a month, find the first Sunday
/*A> That is I want to return from the function, the first sunday that falls within that month-table in the DOM, NOT the first sunday that is withing that calendar month.
B> So, first find the weekday number (in number form 0 to 6) of the first day of the month. Say I get 4 for Thursday.
C> Then get the date of the day which is at -4 position from that day, in other words, -4 position from Thursday is a Sunday. setDate()

getDate() returns the day of the month (from 1 to 31) for the specified date.
getDay() returns the day of the week (from 0 to 6) for the specified date. */

function getFirstSunday(firstDate) {
  let offset = firstDate.getDay(); // e.g. for Thursday the offset is 4.
  let result = new Date(firstDate);
  return result.setDate(firstDate.getDate() - offset);
}

//Given the last date of a month, find the last Saturday.
/*A> That is I want to return from the function, the last saturday that falls within that month-table in the DOM, NOT the last saturday that is within that calendar month.
*/
function getLastSaturday(lastDate) {
  var offset = 6 - lastDate.getDay();
  var result = new Date(lastDate);
  return result.setDate(lastDate.getDate() + offset);  
}