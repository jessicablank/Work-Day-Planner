///set variable for moment.js
var todayDate = moment();

//pull today's date, connect to id in html header, and format
$("#currentDay").text(todayDate.format('dddd, '+'MMMM Do YYYY'));

//set variables for save buttons
var task;
var hourInfo;


//button to clear local and refresh the page
$("#clear").click(function() {
    localStorage.clear();
    location.reload()
});

//Update field color based on current hour
var currentHour = moment().hours();

var id = parseInt($(this).attr("id"));
if (id === currentHour) {
  $(this).attr("class", "row time-block present");
} else if (id < currentHour) {
  $(this).attr("class", "row time-block past");
} else if (id > currentHour) {
  $(this).attr("class", "row time-block future");
}


//function to make the save button work
$(".saveBtn").click(function() {
    task = $(this).siblings(".input").val();
    console.log(task);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(task));
});

//function to save tasks. 
$(document).ready(function(){
    renderTask();
});

function renderTask() {
    var saveTask9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveTask9);

    var saveTask10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveTask10);

    var saveTask11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveTask11);

    var saveTask12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveTask12);

    var saveTask1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveTask1);

    var saveTask2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveTask2);

    var saveTask3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveTask3);

    var saveTask4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveTask4);

    var saveTask5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveTask5);
};
