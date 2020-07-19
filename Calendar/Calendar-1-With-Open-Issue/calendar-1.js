var rows = 6;
var cols = 7;
var cellCount = 1;
var monthNumber;
var yearx = 2018;
var firstDayD;
var lastDayD;
var firstDay = 0;


function monthSelected(monthNum) {
  monthNumber = monthNum;

  firstDayD = new Date(yearx, monthNumber, 1).getDay();
  lastDayD = new Date(yearx, monthNumber + 1, 0);

  firstDay = firstDayD;
  populateCalendar();
}


function tableDraw() {

  var grid = document.getElementById('grid');
  var tbl = document.createElement("table");

  for (var rowsCount = 0; rowsCount < rows; rowsCount++) {
    var row = document.createElement("tr");

    row.setAttribute('id', rowsCount);


    //creating columns for the table
    for (var colCount = 0; colCount < cols; colCount++) {
      var col = document.createElement("td");

      col.setAttribute('id', cellCount);
      console.log(cellCount);

      cellCount++;

      row.appendChild(col);

    }
    tbl.appendChild(row);
  }
  grid.appendChild(tbl);
}

function populateCalendar() {

  var startingPoint = firstDay;

  for (var counterInc = firstDay + 1, i = 1; counterInc < firstDay + 31; counterInc++, i++) {

    var data = document.createTextNode(i.toString());
    var col = document.getElementById(counterInc);
    col.appendChild(data);

  }

}

window.onload = tableDraw;
