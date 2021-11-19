$(document).ready(function() {

    // using moment.js to pull current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function() {
        console.log("this");
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // saving time and text to local storage
        localStorage.setItem(time, text);
    })
//get data from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function hourTracker() {
    var currentHour = moment().hour();

    //setting loop for time block
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        //check the current time, will set color set in CSS and HTML
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();
})
