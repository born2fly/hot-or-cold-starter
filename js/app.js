$(".what").click(function() {
    $(".overlay").fadeIn(1000);

});

$("a.close").click(function() {
    $(".overlay").fadeOut(1000);
});

$("#userGuess").click(function(event){ 
  event.preventDefault();
  var UserInput = $("#userGuess").val(); 
  console.log(UserInput); 
});

// $(".new").click(function(){ 
//   $("#form")[0].reset(); 
// });
 