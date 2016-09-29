$(".what").click(function() {
    $(".overlay").fadeIn(1000);

});

$("a.close").click(function() {
    $(".overlay").fadeOut(1000);
});


$("#guessButton").click(function(event){ 
var userInput = $("#userGuess").val();
  $("#userGuess").submit();
   event.preventDefault();
  console.log("Your guess is " + userInput); 
});





// $(".new").click(function(){ 
//   $("#form")[0].reset(); 
// });
 