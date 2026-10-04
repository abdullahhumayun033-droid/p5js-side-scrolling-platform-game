//function for drawing canyon
function drawCanyon(t_canyon) {
  fill(153, 76, 0);
  rect(t_canyon.Pos_x + 5, 432, t_canyon.width + 20, 90);
  fill(102, 51, 0);
  rect(t_canyon.Pos_x + 5, 522, t_canyon.width + 20, 60);
}

//function to check if the character is falling in canyon
function checkCanyon(t_canyon) {
  if (
    gameChar_x > t_canyon.Pos_x &&
    gameChar_x < t_canyon.Pos_x + t_canyon.width + 20 &&
    gameChar_y - 3 >= t_canyon.Pos_y
  ) {
    isPlummeting = true;
    dieSound.play();
  }
  if (isPlummeting == true) {
    gameChar_y += 3;
 
  }
}

//function to check if the character is dying after falling in canyon
function checkPlayerDie() {
  if (gameChar_y > height) {
    if (isPlummeting == true && lives > 0) {
      lives -= 1;
      if (lives > 0) {
        startGame();
      }
    }
  }
}

