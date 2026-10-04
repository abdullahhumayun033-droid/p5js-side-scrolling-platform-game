/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/

//variables for game character
var gameChar_x;
var gameChar_y;
var gameChar_world_x;
//variables for background
var floorPos_y;
var background_Color1;
var background_Color2;
//variables for movement of character
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
//variable for collectable
var collectables;
//variable for canyon
var canyons;
//variables for tree position
var treePos_x;
var treePos_y;
//variable for cloud and mountains
var clouds;
var mountains;
//variable for movement of camera
var camera_PosX;
//variable for gameScore and lives
var game_score;
var lives;
//variable for flagpole
var flagpole;
//variable for jump sound
var jumpSound;
////variable for Sound for Collectable,Background,Dying,Level Complete.
var collectableSound;
var backgroundSound;
var dieSound;
var levelCompleteSound;
//variable for platforms
var platforms;
var gameEnd = false;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  //Number of lives of character
  lives = 3;
  startGame();
  BackgroundSound();
}

//function where all objects and arrays are initialized
function startGame() {
  gameChar_x = width / 2;
  gameChar_y = floorPos_y + 4;

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
  collectables = [
    { Pos_x: -900, Pos_y: 100, size: 50, isFound: false },
    { Pos_x: -665, Pos_y: 10, size: 50, isFound: false },
    { Pos_x: 30, Pos_y: 100, size: 50, isFound: false },
    { Pos_x: -440, Pos_y: 40, size: 50, isFound: false },
    { Pos_x: 425, Pos_y: 10, size: 50, isFound: false },
    { Pos_x: 690, Pos_y: 100, size: 50, isFound: false },
    { Pos_x: 1400, Pos_y: 100, size: 50, isFound: false },
    { Pos_x: 1900, Pos_y: 100, size: 50, isFound: false },
    { Pos_x: 2220, Pos_y: 10, size: 50, isFound: false },
  ];
  camera_PosX = 0;
  gameChar_world_x = gameChar_x - camera_PosX;
  canyons = [
    { Pos_x: 50, Pos_y: 432, width: 100 },
    { Pos_x: -620, Pos_y: 432, width: 100 },
    { Pos_x: -1320, Pos_y: 432, width: 100 },
    { Pos_x: 710, Pos_y: 432, width: 100 },
    { Pos_x: 1420, Pos_y: 432, width: 100 },
    { Pos_x: 2120, Pos_y: 432, width: 100 },
  ];
  treePos_x = [-1700, -1150, -370, 240, 920, 1300, 2100];
  treePos_y = floorPos_y - 155;
  clouds = [
    { Pos_x: -760, Pos_y: 80, size: 80 },
    { Pos_x: -1020, Pos_y: 140, size: 70 },
    { Pos_x: -1300, Pos_y: 90, size: 90 },
    { Pos_x: -1550, Pos_y: 130, size: 90 },
    { Pos_x: -500, Pos_y: 100, size: 90 },
    { Pos_x: -250, Pos_y: 30, size: 80 },
    { Pos_x: 100, Pos_y: 100, size: 90 },
    { Pos_x: 280, Pos_y: 130, size: 60 },
    { Pos_x: 490, Pos_y: 150, size: 55 },
    { Pos_x: 400, Pos_y: 40, size: 70 },
    { Pos_x: 670, Pos_y: 90, size: 75 },
    { Pos_x: 900, Pos_y: 120, size: 70 },
    { Pos_x: 1150, Pos_y: 95, size: 70 },
    { Pos_x: 1400, Pos_y: 90, size: 60 },
    { Pos_x: 1700, Pos_y: 80, size: 70 },
    { Pos_x: 1920, Pos_y: 100, size: 80 },
    { Pos_x: 2100, Pos_y: 70, size: 60 },
    { Pos_x: 2300, Pos_y: 70, size: 60 },
    { Pos_x: 2480, Pos_y: 90, size: 50 },
  ];
  mountains = [
    { Pos_x: -1600, Pos_y: 400 },
    { Pos_x: -1000, Pos_y: 400 },
    { Pos_x: -300, Pos_y: 400 },
    { Pos_x: 300, Pos_y: 400 },
    { Pos_x: 900, Pos_y: 400 },
    { Pos_x: 1500, Pos_y: 400 },
    { Pos_x: 2100, Pos_y: 400 },
  ];
  platforms = [];
  platforms.push(createPlatforms(-870, floorPos_y - 95, 220));
  platforms.push(createPlatforms(-120, floorPos_y - 85, 150));
  platforms.push(createPlatforms(335, floorPos_y - 95, 145));
  platforms.push(createPlatforms(950, floorPos_y - 95, 250));
  platforms.push(createPlatforms(2150, floorPos_y - 95, 130));
  game_score = 0;
  flagpole = { isReached: false, x_pos: 2700 };
  Enemies = [];
  Enemies.push(new Enemy(2250, floorPos_y + 15, 100));
  Enemies.push(new Enemy(1700, floorPos_y + 15, 100));
  Enemies.push(new Enemy(1200, floorPos_y + 15, 100));
  Enemies.push(new Enemy(1000, floorPos_y + 15, 100));
  Enemies.push(new Enemy(350, floorPos_y + 15, 100));
  Enemies.push(new Enemy(-270, floorPos_y + 15, 100));
  Enemies.push(new Enemy(-1120, floorPos_y + 15, 100));
  Enemies.push(new Enemy(-840, floorPos_y - 105, 50));
}

function draw() {
    if (gameEnd == false) {
    ///////////DRAWING CODE//////////
    //code for moving camera
    camera_PosX = gameChar_x - width / 2;
    //fill the sky blue
    background_Color1 = color(21, 161, 201);
    background_Color2 = color(255);
    for (let y = 0; y < height; y++) {
      n = map(y, 0, height, 0, 1);
      let newc = lerpColor(background_Color1, background_Color2, n);
      stroke(newc);
      line(0, y, width, y);
    }
    backgroundSound.setVolume(0.05);
    //draw some green ground
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y);
    //push & translate function(camera)
    push();
    translate(-camera_PosX, 0);
    //for loop for drawing clouds
    drawClouds();
    //for loop for drawing mountains
    drawMountains();
    //for loop for drawing trees
    drawTrees();
    //for loop for platforms
    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }
    //collectable item
    for (var i = 0; i < collectables.length; i++) {
      if (collectables[i].isFound == false) {
        checkCollectable(collectables[i]);
        drawCollectable(collectables[i]);
      }
    }
    //draw the canyon
    for (var i = 0; i < canyons.length; i++) {
      drawCanyon(canyons[i]);
      checkCanyon(canyons[i]);
    }
    //the game character
    if (isLeft && isFalling) {
      character_moving_left_falling();
    } else if (isRight && isFalling) {
      character_moving_right_falling();
    } else if (isLeft) {
      character_moving_left();
    } else if (isRight) {
      character_moving_right();
    } else if (isFalling || isPlummeting) {
      character_moving_falling_plummeting();
    } else {
      character_standing_front();
    }
    //game score
    fill(255);
    noStroke();
    textSize(15);
    text("Game Score " + game_score, gameChar_x - 500, 20);
    //check flag pole
    if (flagpole.isReached == false) {
      checkFlagpole();
    }
    //flag pole
    renderFlagpole();
    //code for the flag pole
    //  checkFlagpole();
    //code for lives
    fill(255);
    noStroke();
    textSize(15);
    text("Lives: ", gameChar_x - 500, 40);
    for (let i = 1; i <= lives; i++) {
      fill(20, 20, 200);
      ellipse(gameChar_x - 470 + i * 20, 37, 15, 15);
    }
    //check player die
    checkPlayerDie();
    //for loop for enemies
    for (var i = 0; i < Enemies.length; i++) {
      Enemies[i].draw();
  
      var isContact = Enemies[i].checkContact(gameChar_x, gameChar_y);

        if (isContact) {
        lives -= 1;
        if (lives > 0) {
          startGame();
          break;
        }
      }
    }
    //pop function(camera)
    pop();

    // First conditional statement for "Game over"
    if (lives < 1) {
      fill(0);
      noStroke();
      textSize(30);
      text("Game over. Press space to continue.", width / 4, height / 2);
      isPlummeting = false;
      gameChar_y = floorPos_y + 4;
      backgroundSound.setVolume(0);
      dieSound.play();
      gameEnd = true;
      return;
    }
    // Second conditional statement for "Level complete"
    if (flagpole.isReached) {
      fill(0);
      noStroke();
      textSize(30);
      text("Level complete. Press space to continue.", width / 4, height / 2);
      levelCompleteSound.play();
      gameEnd = true;
      return;
    }
    ///////////INTERACTION CODE//////////
    //Put conditional statements to move the game character below here

    if (isLeft == true) {
      gameChar_x -= 7;
    }

    if (isRight == true) {
      gameChar_x += 7;
    }

    if (gameChar_y <= floorPos_y) {
      var isContact = false;
      for (var i = 0; i < platforms.length; i++) {
        if (platforms[i].checkContact(gameChar_x, gameChar_y) == true) {
          isContact = true;
          isFalling = false;
          break;
        }
      }
      if (isContact == false) {
        gameChar_y = gameChar_y + 4;
        isFalling = true;
      }
    } else {
      isFalling = false;
    }
  }
}
