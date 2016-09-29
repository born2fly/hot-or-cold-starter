$(document).ready(function () {

    $(".what").click(function () {
        $(".overlay").fadeIn(1000);
    });

    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    
    var randomNumber = Math.floor(Math.random() * 100) + 1;   //  Generate a random number between 1 and 100 
    console.log("random number is " + randomNumber);

    var count = 0;                                            //  variable used to count guesses , start at zero


     
    $('form').submit(function (event) {                      //  Get user number, display it,  
        event.preventDefault();                              //  display user attempts and evaluate user guess  
        var userInput = parseInt($("#userGuess").val());
        $("#userGuess").val('');
        count++;
        $('#count').text(count);                               // Display number of attempts
        $('#guessList').append('<li>' + userGuess + '</li>');  // Display numbers selected by player
        compareGuess(userGuess);                               // Call function compareGuess
        console.log("Your guess is " + userInput);

    });

    
    $('.new').click(function (event) {                         //  Start a new Game  
        event.preventDefault();
        randomNumber = Math.floor(Math.random() * 100) + 1;    //  reset random #
        count = 0;
        $('#count').text(count);                               //  reset number of guesses
        $('#guessList').html('');                              //  reset display of numbers guessed
        $('#feedback').text('Make your Guess');                //  reset feedback display

});


    function compareGuess(userGuess) {                         // Compare guess to the random number
        var diff = Math.abs(userGuess - randomNumber);
        if (diff===0){
                $('#feedback').text('You Won !');
        } else if (diff>0 && diff <=10){
                $('#feedback').text('Hot');
        } else if (diff>10 && diff<=20){
                $('#feedback').text('Warmer');
        } else if (diff>20 && diff<=30){
                $('#feedback').text('Warm');
        } else if (diff>30 && diff<=40){
                $('#feedback').text('Cool');
        } else if (diff<40 && diff<=50){
                $('#feedback').text('Cold');
        } else if (diff>50){
                $('#feedback').text('Ice Cold');
        }
    }
});