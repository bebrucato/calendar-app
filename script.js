

//Checking for the time and assigning new classes that match
//the CSS styling sheet

  
    function eachHour() {
      // get current number of hours
      var currentT = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockT = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
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
  
    eachHour();
  
   
    