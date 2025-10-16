// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

var BG = 1
// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

runQueue(list)

  // do not change the below line of code
  render($("#display"), image);
}
function runQueue(list) {
  for (var i = 0; i < list.length; i++) {
    if (BG === 1) {
      applyFilter(list[i])
    }
    else {
      applyFilterNoBackground(list[i])
    }
}
}
/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      var pixel = image[r][c]
      var pixelArray = rgbStringToArray(pixel)
      // This is where I’ll modify the color values later 
      filterFunction(pixelArray)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[r][c] = updatedPixel
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0]
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      if (image[r][c] != backgroundColor) {
         var pixel = image[r][c]
         var pixelArray = rgbStringToArray(pixel)
         filterFunction(pixelArray)
         var updatedPixel = rgbArrayToString(pixelArray)
         image[r][c] = updatedPixel
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num > 255 ? 255 : num < 0 ?  0 :num
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200
  
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] -= 50
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE])
  
}
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] += pixelArray[BLUE]
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
}
// CHALLENGE code goes below here
function spookyInversion(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED] 
  pixelArray[GREEN] = 255 - pixelArray[GREEN]
  pixelArray[BLUE] = 255 - pixelArray[BLUE]
}
function iLovePurple(pixelArray) {
  pixelArray[RED]= 255
  pixelArray[BLUE] = 255
}
function shadowifyLikeTheHedgehog(pixelArray) {
  pixelArray[RED] -= 100
  pixelArray[RED] = keepInBounds(pixelArray[RED])
  pixelArray[GREEN] -= 100
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
  pixelArray[BLUE] -= 100
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE]) 
}
function boringGray(pixelArray) {
  var average = (pixelArray[RED] + pixelArray[GREEN] + pixelArray[BLUE]) /2
  pixelArray[RED] = average
  pixelArray[GREEN] = average
  pixelArray[BLUE] = average  
}
var list = []
function addToQueue(filterFunction) {
  list.push(filterFunction)
   console.log(list)
  $('<li>').text(filterFunction.name).appendTo($("#queue-list"))
 
}
function toggleBG() {
  if (BG === 1) {
    BG = 0
  }
  else {
    BG = 1
  }
}

function clearQueue() {
  list = []
  $("#queue-list").empty()
}

