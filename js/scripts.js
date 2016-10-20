var tracker = function(number1, number2, number3) {

  if (number1 === number2 && number2 === number3) {
  return "equal";
}
else if (number1 === number2 || number2 === number3 || number3 === number1) {
  return "isos";

}
else if (number1 + number2 < number3 || number2 + number3 < number1 || number3 + number1 < number2) {
  return "not";

}
else {
  return "scalene";
}
}

//Everything below is logic, everything above is business.

$(document).ready(function() {

$("form").submit(function(event) {

     var number1 = parseInt($("#side1").val());

     var number2 = parseInt($("#side2").val());

     var number3 = parseInt($("#side3").val());

     var result = tracker(number1, number2, number3);

     $("#" + result).show();


  event.preventDefault();
});

$("body").click(function() {
  $("#" + result).hide();

});


















});
