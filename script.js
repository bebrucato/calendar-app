$(document).ready(function() {

//Current day/date under header
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//Event listener for a click on the "save button,
//which allows the information to be saved to the
//text area/rows
    $(".saveBtn").on("click", function() {
      var time = $(this).parent().attr("id");
      var value = $(this).siblings(".description").val();
      
      localStorage.setItem(time, value);
    });
  
//Checks for current time using the "time-block" classes
    function timeCheck() {
      var currentT = moment().hours();
  
      $(".time-block").each(function() {
        var blockT = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockT < currentT) {
          $(this).addClass("past");
        } 

        else if (blockT === currentT) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 

        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }

  //Function callback
    timeCheck();
  
    //The interval checks for time change/hour change
    var interval = setInterval(timeCheck, 10000);
  
    // Saves the data in "text area" to local storage.
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
  });
  