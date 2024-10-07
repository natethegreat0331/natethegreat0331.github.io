$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(250, 600, 100, 200)
    createPlatform(850, 625, 600, 25)
    createPlatform(450, 700, 100, 50)
    createPlatform(490, 520, 50, 0.4)
    createPlatform(850, 550, 25, 100)
    createPlatform(1300, 490, .4, 30)
    createPlatform(1200, 400, 50, 20)
    createPlatform(1070, 300, 50, 20)
    createPlatform(1200, 200, 50, .1)
    createPlatform(890, 200, 50, .1)
    createPlatform(750, 150, 10, .1)
    createPlatform(650, 150, 10, .1)
    createPlatform(120, 200, 10, .1)
    createPlatform(500, 150, 10, .1)
    createPlatform(320, 150, 10, .1)
    createPlatform(200, 150, 10, 2)
    createPlatform(935, 100, 10, 10)
    






    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)


    createCollectable("knight", 1300, 700, 0)
    createCollectable("hornet", 1350, 100, 0)
    createCollectable("brand", 100, 100, 1, 1)
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("bottom", 700, 1250)
    createCannon("bottom", 350, 1250)
    createCannon("bottom", 600, 1250)
    createCannon("bottom", 650, 1250)
    createCannon("left", 450, 1000)
    createCannon("right", 400, 4700)
    createCannon("bottom", 950, 1400)
    createCannon("bottom", 1050, 1200)
    createCannon("bottom", 1150, 1000)
    createCannon("left", 10, 15000, 100, 250)

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
