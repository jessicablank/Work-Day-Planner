// Load date on jumbotron
let dt = new Date();
let todaysDate = `${dt.getMonth() + 1} / ${dt.getDate()} / ${dt.getFullYear()}`;
$("#current-day").text(todaysDate);

// Check current time every 15 seconds
setInterval(checkTime(), 15000);

// Activate tool tips 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Activate save button
$(".saveBtn").on("click", function () {

  // Set variables using DOM relationships
  let time = "#" + $(this).parent().attr("id");
  let task = $(this).siblings(".description").val();

  // Save in local storage with key as "hour-X" and value as description field
  localStorage.setItem(time, task);
})

// When checking time, change the color of the text area
function checkTime() {
  let currentHour = dt.getHours();

  $(".time-block").each(function () {
    // parseInt takes the id of the time block and converts the string into a number for validation
    let blockTime = parseInt($(this).attr("id").split("-")[1]);

    // Set color attribute for description according to current time using Bootswatch classes
    if (blockTime < currentHour) {
      $(this.children[1]).addClass("bg-secondary text-white border-primary");
    } else if (blockTime === currentHour) {
      $(this.children[1]).removeClass("bg-secondary text-white");
      $(this.children[1]).addClass("bg-success text-white border-success");
    } else if (blockTime > currentHour) {
      $(this.children[1]).removeClass("bg-success text-white");
      $(this.children[1]).addClass("bg-primary text-white");
    }

    // Check localStorage for data
    // if there is data, load on page
    for (let i = 0; i < localStorage.length; i++) {
      let blockTimeId = localStorage.key(i);
      $(blockTimeId)
        .children(".description")
        .val(localStorage.getItem(localStorage.key(i)));
    }
  });
}

//button to clear local storage for a new day
$("#clearBTN").click(function () {
  localStorage.clear();
  location.reload();
});
