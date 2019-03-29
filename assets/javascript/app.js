$(document).ready(function() {

var sec = 60;

var stopTimer = function () { // in reality this is a reset function
    clearInterval(startTimer);
    sec = 60; // reset seconds
    startTimer = setInterval(countdown, 1000); // reset timer
    score = 0; // reset score
    // alert("Oh no, time's up! Refresh to try again.");
};

var countdown = function () {
    sec--;
    $("#timer").text("Time Remaining: " + sec);
    if (sec === 0) {
        alert("Oh no, time's up!");
        submitForm(); // end game for user
    }
};



var score = 0;

var correctArray = ["Gotham City", "Baseball", "42", "Warthog", "4", "Da Vinci", "Mercury"];

var answerCount = function (ans) {
    if (correctArray.indexOf(ans)) {
        score++;
    }
};

// clicking on done button to end quiz
$("#done").click(function (event) {
    event.preventDefault();
    submitForm();
    
});

function submitForm() {
    stopTimer();
    getUserInputToPassToAnswerCount();
}

function getUserInputToPassToAnswerCount() {
    // capturing answers
    // var a1 = $("input[name=city]:checked").val();
    // var a2 = $("input[name=sport]:checked").val();
    // var a3 = $("input[name=dots]:checked").val();
    // var a4 = $("input[name=animal]:checked").val();
    // var a5 = $("input[name=strings]:checked").val();
    // var a6 = $("input[name=artist]:checked").val();
    // var a7 = $("input[name=planet]:checked").val();


    const choices = [];
    $('input:radio[name=choice]:checked').each(function() {
        choices.push($(this).val());
    });
    console.log(choices);
    
    // answerCount(a1);
    // answerCount(a2);
    // answerCount(a3);
    // answerCount(a4);
    // answerCount(a5);
    // answerCount(a6);
    // answerCount(a7);
    for(let choice in choices) {
        answerCount(choice);
        
    }
    alert("Your score is " + score + " out of 7!")
}

var startTimer = setInterval(countdown, 1000);

});