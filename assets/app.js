///set variable for moment.js
var todayDate = moment();

//pull today's date, connect to id in html header, and format
$("#currentDay").text(todayDate.format('dddd, '+'MMMM Do YYYY'));

//set variables for buttons
var task;
var hour;


//button to clear local and refresh the page
$("#clear").click(function() {
    localStorage.clear();
    location.reload()
});