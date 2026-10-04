function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work


  if (isPlummeting == false) {
    if (keyCode == 65) {
     //key a

      isLeft = true;
    } else if (keyCode == 68) {
    //key d

      isRight = true;
    }
    if (keyCode == 87 && isFalling == false) {
      gameChar_y -= 120;
      jumpSound.play();
    }
  }
  if ((lives < 1 || flagpole.isReached) && keyCode == 32) {
    flagpole.isReached = false;
    gameChar_x = width / 2;
    lives = 3;
    gameScore = 0;
    addCollectable(collectables);
    gameEnd = false;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.
    
    
    
    //key a
    //key d
   if (keyCode == 65) {
    isLeft = false;
  }
  if (keyCode == 68) {
    isRight = false;
  }
}
