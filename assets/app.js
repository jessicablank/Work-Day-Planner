

//Load date on jumbotron
let dt = new Date();
let todaysDate =  `${dt.getMonth()+1} / ${dt.getDate()} / ${dt.getFullYear()}`;
$("#currentDay").text(todaysDate);

//Check Time
setInterval(checkTime(), 15000);

// Activate save button
$(".saveBtn").on("click", function() {
    // Save task and time
    let task = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    //Save in local storage
    localStorage.setItem(time,task);
  })

function checkTime(){
  let currentHour = dt.getHours()
  
  //Loop over time blocks
  $(".time-block").each(function(){
    // parseInt takes the id of the block and turns it from a string to a number
    let blockTime = parseInt($(this).attr("id").split("-")[1])
    

  // set color attribute for description according to current time using bootstrap classes
  if (blockTime < currentHour){
    $(this.children[1]).addClass("bg-secondary");
  } else if
  (blockTime === currentHour) {
  $(this.children[1]).removeClass("bg-secondary");
  $(this.children[1]).addClass("bg-success");
  } else if (blockTime > currentHour) {
    $(this.children[1]).removeClass("bg-success");
    $(this.children[1]).addClass("bg-warning");
  } 
  })
}
 
//button to clear local and refresh the page
$("#clearBTN").click(function() {
    localStorage.clear();
    location.reload()
});

   // load any saved data from localStorage
   $("#hour-9 .description").val(localStorage.getItem("hour-9"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-13 .description").val(localStorage.getItem("hour-13"));
   $("#hour-14 .description").val(localStorage.getItem("hour-14"));
   $("#hour-15 .description").val(localStorage.getItem("hour-15"));
   $("#hour-16 .description").val(localStorage.getItem("hour-16"));
   $("#hour-17 .description").val(localStorage.getItem("hour-17"));




