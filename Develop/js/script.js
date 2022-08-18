//DOM representation of timeblocks
var hours = $(".time-block");
//DOM representation of <p> in header to display date
var currentDay = $("#currentDay");
//variable to hold moment time, to compare in hours.each function.
var currentTime = (moment().hours());
console.log('current time', currentTime);
//add text to currentDay of moment time.
currentDay.text(moment().format("LLLL"));


//function to hold hours in workTime, then compare them to moment time.
hours.each(function(){
   //parse the data-id into an integer to be stored.
    let workTime = parseInt($(this).attr("data-id"));
    console.log('work time', workTime);
    
    //if worktime is less than moment time, add a class of past.
    if (workTime < currentTime) {
       $(this).addClass("past");
       console.log("past")
    }
    //if working is greater than moment time, add a class of future and remove past class.
    else if (workTime > currentTime) {
       console.log("future");
       $(this).addClass("future");
       $(this).removeClass("past")
    }
    //if the time is the same, add a class of present and remove the past/future classes.
    else {
       console.log("present")
       $(this).addClass("present")
       $(this).removeClass("past");
       $(this).removeClass("future");
    }
})

//push data to local storage when save button is clicked
$(".saveBtn").on("click", function() {
   //target the parent of the element that contains data-id
   var key = $(this).parent().attr("data-id");
   console.log("KEY!", key);
   //target the sibling "textarea" to store value 
   var value = $(this).siblings("textarea").val()
   //set the key value pair
   localStorage.setItem(key, value)
})

//retreive data from localStorage for persistence by targeting the value of textarea with data-id. 
$('[data-id ="9"] textarea').val(localStorage.getItem("9"));
$('[data-id ="10"] textarea').val(localStorage.getItem("10"));
$('[data-id = "11"] textarea').val(localStorage.getItem("11"));
$('[data-id = "12"] textarea').val(localStorage.getItem("12"));
$('[data-id = "13"] textarea').val(localStorage.getItem("13"));
$('[data-id = "14"] textarea').val(localStorage.getItem("14"));
$('[data-id = "15"] textarea').val(localStorage.getItem("15"));
$('[data-id = "16"] textarea').val(localStorage.getItem("16"));
$('[data-id = "17"] textarea').val(localStorage.getItem("17"));


