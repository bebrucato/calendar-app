//Current day/date
var currentDay= $("#currentDay")
currentDay.text(moment().format("dddd, MMMM Do, YYYY"))

//Checking for the time and assigning new classes that match
//the CSS styling sheet
function eachHour() {
    
    var currentHour = moment().hours();

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
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

  eachHour();
