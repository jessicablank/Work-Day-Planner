// Wait for page to finish loading
$(function(){
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
  let currentHour = dayjs().hour()
  console.log(currentHour)
  //Loop over time blocks
  $(".time-block").each(function(){
    let blockTime= parseInt($(this).attr("id").split("-")[1])

  // set color attribute for description according to current time using bootstrap classes
  if (blockTime < currentHour){
    $(this).addClass("bg-secondary");
  } else if
  (blockTime === currentHour) {
    $(this).removeClass("bg-secondary");
    $(this).addClass("bg-success");
  } else if (blockTime > currentHour) {
    $(this).removeClass("bg-success");
    $(this).addClass("bg-warning");
  } else {
    // If after 5pm, toggle dark mode
    // $(".hour").addClass("bg-primary")
    // $(".hour").addClass("text-white")
    // $(".description").addClass("bg-primary")
    // $(".description").addClass("text-white")
    // $(".saveBtn").addClass("bg-primary")
    // $(".saveBtn").addClass("text-white")
    // $("body").addClass("bg-secondary")
    // $("body").addClass("text-white")
  }
})
 }



 

//button to clear local and refresh the page
$("#clearBTN").click(function() {
    localStorage.clear();
    location.reload()
});

  //Load any saved data from local storage
  $("#9AM .description").val(localStorage.getItem("9AM"))
  $("#10AM .description").val(localStorage.getItem("10AM"))
  $("#11AM .description").val(localStorage.getItem("11AM"))
  $("#12PM .description").val(localStorage.getItem("12AM"))
  $("#1PM .description").val(localStorage.getItem("1PM"))
  $("#2PM .description").val(localStorage.getItem("2PM"))
  $("#3PM .description").val(localStorage.getItem("3PM"))
  $("#4PM .description").val(localStorage.getItem("4PM"))
  $("#5PM .description").val(localStorage.getItem("5PM"))




})


