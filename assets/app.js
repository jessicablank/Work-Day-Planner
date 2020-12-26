// Wait for DOM to be ready before JavaScript code runs. 
$(document).ready(function () {
  // Check current time every second
  setInterval(checkTime, 1000);

  // Activate tool tips (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //~~~ ಠ‿ಠ Set, get, and clear localStorage ~~~
  // Activate save button
  $(".saveBtn").on("click", function () {
    // Set variables using DOM relationships
    let time = "#" + $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();

    // Save in local storage with key as "#hour-X" and value as description field
    // The key will match to time block id fields in index.html
    localStorage.setItem(time, task);
  });

  // Check localStorage for data
  // if there is data, match the time to the task description field id
  // and populate the field with task values. 
  for (let i in localStorage) {
    let blockTimeId = localStorage.key(i);
    $(blockTimeId)
      .children(".description")
      .val(localStorage.getItem(localStorage.key(i)));
  }



  //button to clear local storage for a new day
  $("#clearBTN").click(function () {
    localStorage.clear();
    location.reload();
  });

  // ~~~ ◔ ⌣ ◔ Update time and color displays ~~~
  function checkTime() {
    // Load date & time on jumbotron
    let dt = new Date();
    let todaysDate = `${
      dt.getMonth() + 1
    } / ${dt.getDate()} / ${dt.getFullYear()}`;
    $("#current-day").text(todaysDate);
    let currentHour = dt.getHours();
    let currentTime = dt.toLocaleTimeString();
    document.getElementById("current-time").innerHTML = currentTime;

    // Loop over the time blocks while checking the current time
    $(".time-block").each(function () {
      // parseInt takes the id of the time block and converts the string into a number for validation
      let blockTime = parseInt($(this).attr("id").split("-")[1]);
      let descriptionField = this.children[1];

      // Set color attribute for description according to current time using Bootswatch classes
      if (blockTime < currentHour) {
        $(descriptionField).addClass("bg-secondary text-white border-primary");
      } else if (blockTime === currentHour) {
        $(descriptionField).removeClass("bg-secondary text-white");
        $(descriptionField).addClass("bg-success text-white border-success");
      } else if (blockTime > currentHour) {
        $(descriptionField).removeClass("bg-success text-white");
        $(descriptionField).addClass("bg-primary text-white");
      }
    });
  }

  // Call your function ◕‿◕
  checkTime();

});
