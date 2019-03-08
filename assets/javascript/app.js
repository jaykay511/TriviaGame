// window.onload = function() {
//     $("#lap").on("click", recordLap);
//     $("#start").on("click", start);
//   };


window.onload = function() {
    startTimer()
};


function startTimer() {
    var sec = 60;
    setInterval(function() {
    $("#timer").text("Time Remaining: " + sec);
      sec--;
    }, 1000);
};



// remember to stop timer

// on click 

