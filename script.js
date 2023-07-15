// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButtonEl = $(".btn saveBtn col-2 col-md-1");
var todayEl = $("#currentDay");
var textEl = $(".col-8 col-md-10 description");


  
  
  // TODO: Add code to display the current date in the header of the page.
  
      //dates in console (IT WORKS WITHOUT THE CODE ABOVE LOL)
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
