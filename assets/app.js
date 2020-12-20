// wait for page to finish loading

dayjs().format()

$(function(){
let dt = new Date();
let todaysDate =  `${dt.getMonth()+1} / ${dt.getDate()} / ${dt.getFullYear()}`;
let currentHour = dt.getHours();
console.log(currentHour)

// Display date in header
$("#currentDay").text(todaysDate);


function checkTime(){
  let dt = new Date();
  let currentHour = dt.getHours();
  //Loop over time blocks
  for (let hour = 9; hour <=24; hour++){
    let blockTime = $("#"+ hour)
    
  // set color attribute for blocks according to current time using bootstrap classes
  if (blockTime < currentHour){
    $("#" + hour).addClass("bg-secondary");
  } else if
  (blockTime === currentHour) {
    $("#" + hour).removeClass("bg-secondary");
    $("#" + hour).addClass("bg-success");
  } else if (blockTime > currentHour) {
    $("#" + hour).removeClass("bg-success");
    $("#" + hour).addClass("bg-warning");
  } else {
    //If after 5pm, toggle dark mode
    // $(".hour").addClass("bg-primary")
    // $(".hour").addClass("text-white")
    // $(".description").addClass("bg-primary")
    // $(".description").addClass("text-white")
    // $(".saveBtn").addClass("bg-primary")
    // $(".saveBtn").addClass("text-white")
    // $("body").addClass("bg-secondary")
    // $("body").addClass("text-white")
  }
  }  
 }

 setInterval(checkTime(), 30000)
 

//button to clear local and refresh the page
$("#clearBTN").click(function() {
    localStorage.clear();
    location.reload()
});

  //set variable to get submitted tasks out of local storage for each time block
  var nineAM = localStorage.getItem("9");
  $("#9").val(nineAM);

  var tenAM = localStorage.getItem("10");
  $("#10").val(tenAM);

  var elevenAM = localStorage.getItem("11");
  $("#11").val(elevenAM);

  var noon = localStorage.getItem("12");
  $("#12").val(noon);

  var onePM = localStorage.getItem("13");
  $("#13").val(onePM);

  var twoPM = localStorage.getItem("14");
  $("#14").val(twoPM);

  var threePM = localStorage.getItem("15");
  $("#15").val(threePM);

  var fourPM = localStorage.getItem("16");
  $("#16").val(fourPM);

  var fivePM = localStorage.getItem("17");
  $("#17").val(fivePM);

//function to save task into local storage

$(".saveBtn").on("click", function() {
    var messageId = $(this).data("time");
    $("#" + messageId).val();
    localStorage.setItem(messageId, $("#" + messageId).val());
  })

})


