var saveButtonEl = $(".saveBtn");
var todayEl = $("#currentDay");
//var textEl = $(".description");
//dates (IT WORKS WITHOUT THE CODE ABOVE LOL)
$(document).ready(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  // I THINK I DID IT RIGHT LOL BUT DOESNT SHOW ALERT/ OR LOG CONSOLE
  saveButtonEl.on('click', function (event) {
    event.preventDefault();
    var descriptionValue = $(this).siblings(".description").val()
    var hourBlock = $(this).parent().attr("id")

    localStorage.setItem(hourBlock, JSON.stringify(descriptionValue))
  });

  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)))
  }

  // current time
  let currentTime = dayjs().hour();

  //  Change text area based on the time
  var timeBlockEle = $(".description");
  timeBlockEle.each(function () {
    var elementID = $(this).parent().attr("id");
    var idValue = elementID.slice(5)

    if (idValue < currentTime) {
      //  if the timeBlock is for 12pm and the current time is 9am, then this timeblock is the past
      // this is referring to the textarea
      // go from textarea tag to the parent tag (<div id="hour-9" class="row time-block">)
      // in that div we want to add the class of past so that the past css gets applied
      $(this).parent(".time-block").attr("class", "row time-block past");
    }
    else if (idValue > currentTime) {
      //  if the timeBlock is for 9am and the current time is 12pm, then this timeblock is the future
      // this is referring to the textarea
      // go from textarea tag to the parent tag (<div id="hour-9" class="row time-block">)
      // in that div we want to add the class of past so that the future css gets applied
      $(this).parent(".time-block").attr("class", "row time-block future");
    }
    else {
      // if the timeBlock is for 9am and the current time is 9am, then this timeblock is the present
      // this is referring to the textarea
      // go from textarea tag to the parent tag (<div id="hour-9" class="row time-block">)
      // in that div we want to add the class of past so that the present css gets applied
      $(this).parent(".time-block").attr("class", "row time-block present");
    }
  })
})



