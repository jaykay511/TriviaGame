$(document).ready(function () {

    var sec = 60;

    var stopTimer = function () { // in reality this is a reset function
        clearInterval(startTimer);
        sec = 60; // reset seconds
        // startTimer = setInterval(countdown, 1000); // reset timer
        score = 0; // reset score
    };

    var countdown = function () {
        sec--;
        $("#timer").text("Time Remaining: " + sec);
        if (sec === 0) {
            alert("Oh no, time's up! Refresh to try again.");
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
        $("#container").hide();
    });

    // stopping timer and submitting answers for tally
    function submitForm() {
        stopTimer();
        getUserInputToPassToAnswerCount();
    };

    function getUserInputToPassToAnswerCount() {
        // creating new array and pushing user's answers into it
        const choices = [];
        $('input:radio[name=choice]:checked').each(function () {
            choices.push($(this).val());
        });
        console.log(choices);
        // looping through user's answers to see if they are in "correct answers" array
        for (let choice in choices) {
            answerCount(choice);
        }
        alert("Your score is " + score + " out of 7! Refresh to play again.");
    };

    var startTimer = setInterval(countdown, 1000);

});