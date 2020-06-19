///set moment variable & print to home page
var todayDate = moment();
console.log(todayDate.format('dddd, '+'MMMM Do YYYY'));

$("#currentDay").text(todayDate.format('dddd, '+'MMMM Do YYYY'));