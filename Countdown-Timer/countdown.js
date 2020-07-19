// declare jQuery variables
// What the immediately below line does - The RHS only selects an element with a class of 'counter-wrapper', then assigns the class selector to the jquery variable $this . So this just a case how a A jQuery object containing the selected element (i.e. the part $('.counter-wrapper') ) can be assigned to a JavaScript variable by a normal variable assignment syntax.
const $this          = $('.counter-wrapper');
let $counter         = $('.counter');
let $counterInner    = $('.counter-inner');
let $counterStart    = $('.counter-start');
let $counterDelete   = $('.counter-delete');
let $counterValidate = $('.counter-validation');

// Deal with data input into the input form
formValidate = () => {
  let inputVal = $counter.find('input').val();
  if (inputVal == '') {
    $counterValidate.text('* Required!');
  } else {
    $counterValidate.text('');
    //create a key named 'targetDate' and set its value to inputVal for storage interface
    localStorage.setItem('targetDate', inputVal);
  }
};

// Because, I want to show the countdown upto the seconds unit, hence, I will repeatedly execute the timer function at an interval of each second.
timer = () => {
  let targetDate = new Date(localStorage.getItem('targetDate')).getTime();
  let timerInterval = setInterval(() => {
    // Date.now() is faster than new Date().getTime()
    let now = Date.now();
    let timeDistance = targetDate - now;
    //timeDistance is in milliseconds. So, now convert.
    let days = Math.floor(timeDistance / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDistance / (1000 * 60 * 60)) % 24); // Total hours in timeDistance % 24
    let minutes = Math.floor((timeDistance / (1000 * 60)) % 60); // Total minutes in timeDistance % 60
    let seconds = Math.floor((timeDistance / (1000)) % 60); // Total seconds in timeDistance % 60

    $counterInner.text(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
  }, 1000);

  $counterDelete.on('click', () => {
    localStorage.removeItem('targetDate');
    localStorageDataChecker();
    clearInterval(timerInterval);
  });
};

/* dataChecker is a toggle function, to activate / deactivate counter-add and counter-remove class.
When localStorage has not yet been assigned with a targetDate, I activate counter-add class, i.e. removeClass('d-none') */
localStorageDataChecker = () => {
  if(localStorage.targetDate == undefined) {
    $('.counter-remove').addClass('d-none');
    $('.counter-add').removeClass('d-none');
    $counterInner.text('');
  } else {
    $('.counter-add').addClass('d-none');
    $('.counter-remove').removeClass('d-none');
    timer();
  }
};

init = () => {
  localStorageDataChecker();
};

// events
$counterStart.on('click', () => {
  formValidate();
  localStorageDataChecker();
});

// run
init();

/*.d-none is a display-utility class of Bootstrap that changes the value of the display property .
* https://developer.mozilla.org/en-US/docs/Web/CSS/display - In addition to the many different display box types, the value none lets you turn off the display of an element; when you use none, all descendant elements also have their display turned off. The document is rendered as though the element doesn't exist in the document tree.
*/

