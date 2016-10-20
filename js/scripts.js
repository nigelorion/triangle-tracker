$(document).ready(function() {

$("form").submit(function(event) {

     var number1 = parseInt($("#side1").val());

     var number2 = parseInt($("#side2").val());

     var number3 = parseInt($("#side3").val());

       console.log(number3);
     if (number1 === number2 && number2 === number3) {
       $('#equal').show();
     }
     else if (number1 === number2 || number2 === number3 || number3 === number1) {
       $('#isos').show();
     }
     else if (number1 + number2 > number3 || number2 + number3 > number1 || number3 + number1 > number2) {
       $('#scalene').show();
     }
     else {
       $('#not').show();
     }
  event.preventDefault();
});

$("body").click(function() {
  $('#equal').hide();
  $('#isos').hide();
  $('#scalene').hide();
  $('#not').hide();
});


















});
