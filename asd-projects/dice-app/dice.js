$(document).ready(function () {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 42.5)
  .css("left", 42.5)
  .appendTo("#die");// Your code goes here
function makeDot(top, left, elementID) {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
}
  function handleClick() {
    $("#die").empty();
var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);
if (randomNum === 1) {
  $("#die").css("background-color", "red")
   $("body").css("background-color", "rgb(255,111,111)")
   $("h1").css("color", "rgba(255, 48, 48, 0.445)")
   $("h1").text("1")
  makeDot(42.5, 42.5, "#die"); // middle middle
} else if (randomNum === 2) {
    $("#die").css("background-color", "orange")
     $("body").css("background-color", "rgb(255, 169, 111)")
     $("h1").css("color", "rgba(255, 131, 48, 0.45)")
   $("h1").text("2")
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 67.5, "#die"); // bottom right
} else if (randomNum === 3) {
   $("#die").css("background-color", "yellow")
    $("body").css("background-color", "rgb(245, 239, 162)")
     $("h1").css("color", "rgba(255, 241, 48, 0.45)")
   $("h1").text("3")
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(42.5, 42.5, "#die"); // middle middle
} else if (randomNum === 4) {
   $("#die").css("background-color", "green")
    $("body").css("background-color", "rgba(116, 255, 111, 1)")
     $("h1").css("color", "rgba(65, 255, 48, 0.45)")
   $("h1").text("4")
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(17.5, 67.5, "#die"); // bottom left
  makeDot(67.5, 17.5, "#die"); // top right
} else if (randomNum === 5) {
   $("#die").css("background-color", "blue")
    $("body").css("background-color", "rgb(113, 111, 255)")
     $("h1").css("color", "rgba(48, 86, 255, 0.45)")
   $("h1").text("5")
  makeDot(42.5, 42.5, "#die"); // middle middle
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(17.5, 67.5, "#die"); // bottom left
  makeDot(67.5, 17.5, "#die"); // top right
}
else {
   $("#die").css("background-color", "purple")
    $("body").css("background-color", "rgb(197, 111, 255)")
     $("h1").css("color", "rgba(196, 48, 255, 0.45)")
   $("h1").text("6")
  makeDot(42.5, 17.5, "#die"); // middle left
  makeDot(42.5, 67.5, "#die"); // middle right
  makeDot(67.5, 67.5, "#die"); // bottom right
  makeDot(17.5, 17.5, "#die"); // top left
  makeDot(17.5, 67.5, "#die"); // bottom left
  makeDot(67.5, 17.5, "#die"); // top right
}
}
$("#die").on("click", handleClick)
});

