///set moment variable & print to home page
var todayDate = moment();
console.log(todayDate.format('dddd, '+'MMM Do YYYY'));

$("#currentDay").text(todayDate.format('dddd, '+'MMM Do YYYY'));