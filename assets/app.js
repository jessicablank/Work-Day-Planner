///set variable for moment.js
var todayDate = moment();

//pull today's date, connect to id in html header, and format
$("#currentDay").text(todayDate.format('dddd, '+'MMMM Do YYYY'));

 //set variable for 12-hour time format
 var currentTime = moment().format("h");
  //set variable for 24-hour time format
 var milTime = moment().format("H");


 for (var hour = 9; hour <= 17; hour++) {
    var index = hour;
    var blockTime = $("#" + index).data("military");
  

  // set color attribute for blocks according to current time
  // used styling info from css file, but was not able to link to css file
  if (blockTime == milTime) {
    $("#" + index).css({"background-color": "#ff6961", "color": "white"});
  } 
  else if (blockTime < milTime) {
    $("#" + index).css({"background-color": "#d3d3d3", "color": "white"});
  }
  else if (blockTime > milTime) {
    $("#" + index).css({"background-color": "#77dd77", "color": "white"});
  }
  
 }
    

//button to clear local and refresh the page
$("#clear").click(function() {
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




