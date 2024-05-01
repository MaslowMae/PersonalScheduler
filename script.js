// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
$(".saveBtn").on("click", function() {
  var timeBlock=$(this).closest(".time-block");
  //extract id of time block
var timeBlockId=timeBlock.attr("id");

//get user input
var userInput = timeBlock.find("textarea").val();

//save input in local storage 
localStorage.setItem(timeBlockId, userInput); 
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(function() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      //get the hour from time block ids
      var hour = parseInt($(this).attr("id").split("-")[1]);
      //compare the hour value with the current hour
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  $(function () {
    $(".time-block").each(function () {
      //id of timeblock
      var timeBlockId = $(this).attr("id");
      //go to local storage and get the user input using the timeblocks id
      var userInput = localStorage.getItem(timeBlockId);
      //setting value of textarea in the timeblock to the user input
      $(this).find("textarea").val(userInput);
    });
  });


  // TODO: Add code to display the current date in the header of the page.

$(function () {
  //format date
  function formatDate() {
    var options = {weekday: 'long', year: "numeric", month:"long", day: 'numeric'};
    return Date.toLocalDateString(undefined,options);
  }
})

var currentDate = new Date();

var formattedDate = formatDate(currentDate);

//update content of the header with the current date

$("#current-date").text("Today is" + formattedDate);

});
