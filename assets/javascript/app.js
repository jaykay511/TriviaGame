window.onload = function() {
    startTimer()
};

function startTimer() {
    var sec = 60;
    var starting = setInterval(function() {
    $("#timer").text("Time Remaining: " + sec);
      sec--;
    }, 1000);

    // stop timer not working
    // if(sec === 0) {
    //     clearInterval(starting);
    // };
};

// clicking on done button to end quiz
$("#done").click(function(event) {
    event.preventDefault();
// calculate correct, incorrect, unanswered responses
    var inputs = $("#form input:checked");

    for (var i = 0; i < inputs.length; i++) {
        // alert($(inputs[i]).val());

    }

// display html

});