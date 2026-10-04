//all the code for character
function character_moving_left_falling() {
  // add your jumping-left code
  fill(255, 255, 0);
  rect(gameChar_x - 9, gameChar_y - 73, 20, 25); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 9, gameChar_y - 50, 20, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 9, gameChar_y - 40, 20, 10); //brown square
  fill(255, 155, 0);
  rect(gameChar_x - 8, gameChar_y - 30, 15, 5); //left leg
  rect(gameChar_x - 16, gameChar_y - 30, 15, 5); //right leg
  rect(gameChar_x - 22, gameChar_y - 46, 18, 4); //right arm
  fill(0, 40, 255);
  ellipse(gameChar_x - 10, gameChar_y - 65, 3, 6); //right eye
  fill(200, 140, 100);
  ellipse(gameChar_x - 10, gameChar_y - 55, 5, 9); //mouth
  fill(0, 0, 0);
  rect(gameChar_x - 22, gameChar_y - 31, 6, 8); //left shoe
}

function character_moving_right_falling() {
  // add your jumping-right code
  fill(255, 255, 0);
  rect(gameChar_x - 9, gameChar_y - 73, 20, 25); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 9, gameChar_y - 50, 20, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 9, gameChar_y - 40, 20, 10); //brown square
  fill(255, 155, 0);
  rect(gameChar_x - 4, gameChar_y - 30, 15, 5); //left leg
  rect(gameChar_x + 1, gameChar_y - 30, 15, 5); //right leg
  rect(gameChar_x + 8, gameChar_y - 46, 15, 4); //right arm
  fill(0, 40, 255);
  ellipse(gameChar_x + 10, gameChar_y - 65, 3, 6); //right eye
  fill(200, 140, 100);
  ellipse(gameChar_x + 10, gameChar_y - 55, 5, 9); //mouth
  fill(0, 0, 0);
  rect(gameChar_x + 16, gameChar_y - 31, 6, 8); //left shoe
}

function character_moving_left() {
  // add your walking left code
  fill(255, 255, 0);
  rect(gameChar_x - 9, gameChar_y - 73, 20, 30); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 9, gameChar_y - 44, 20, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 9, gameChar_y - 34, 20, 10); //brown square
  fill(255, 155, 0);
  rect(gameChar_x - 4, gameChar_y - 24, 5, 15); //left leg
  rect(gameChar_x + 1, gameChar_y - 24, 5, 15); //right leg
  rect(gameChar_x - 1, gameChar_y - 50, 3, 20); //right arm
  fill(0, 40, 255);
  ellipse(gameChar_x - 9, gameChar_y - 60, 5, 5); //right eye
  fill(200, 140, 100);
  ellipse(gameChar_x - 9, gameChar_y - 50, 5, 5); //mouth
  fill(0, 0, 0);
  rect(gameChar_x - 8, gameChar_y - 9, 15, 6); //left shoe
}

function character_moving_right() {
  // add your walking right code
  fill(255, 255, 0);
  rect(gameChar_x - 9, gameChar_y - 73, 20, 30); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 9, gameChar_y - 44, 20, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 9, gameChar_y - 34, 20, 10); //brown square
  fill(255, 155, 0);
  rect(gameChar_x - 4, gameChar_y - 24, 5, 15); //left leg
  rect(gameChar_x + 1, gameChar_y - 24, 5, 15); //right leg
  rect(gameChar_x - 1, gameChar_y - 50, 3, 20); //right arm
  fill(0, 40, 255);
  ellipse(gameChar_x + 10, gameChar_y - 60, 5, 5); //right eye
  fill(200, 140, 100);
  ellipse(gameChar_x + 10, gameChar_y - 50, 5, 5); //mouth
  fill(0, 0, 0);
  rect(gameChar_x - 4, gameChar_y - 9, 15, 6); //left shoe
}

function character_moving_falling_plummeting() {
  // add your jumping facing forwards code
  fill(255, 255, 0);
  rect(gameChar_x - 15, gameChar_y - 73, 30, 20); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 15, gameChar_y - 54, 30, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 15, gameChar_y - 44, 30, 10); //brown square
  fill(255, 155, 0);
  rect(gameChar_x - 12, gameChar_y - 34, 5, 15); //left leg
  rect(gameChar_x + 7, gameChar_y - 34, 5, 15); //right leg
  rect(gameChar_x + 15, gameChar_y - 60, 8, 3); //right arm
  rect(gameChar_x - 23, gameChar_y - 60, 8, 3); //left arm
  fill(0, 40, 255);
  ellipse(gameChar_x + 7, gameChar_y - 65, 5, 7); //right eye
  ellipse(gameChar_x - 7, gameChar_y - 65, 5, 7); //left eye
  fill(200, 140, 100);
  ellipse(gameChar_x, gameChar_y - 58, 5, 8); //mouth
  fill(0, 0, 0);
  rect(gameChar_x - 16, gameChar_y - 19, 10, 6); //left shoe
  rect(gameChar_x + 6, gameChar_y - 19, 10, 6); //right shoe
}

function character_standing_front() {
  // add your standing front facing code
  fill(255, 255, 0);
  rect(gameChar_x - 15, gameChar_y - 73, 30, 30); //yellow square
  fill(245, 245, 245);
  rect(gameChar_x - 15, gameChar_y - 44, 30, 10); //white square
  fill(150, 75, 0);
  rect(gameChar_x - 15, gameChar_y - 34, 30, 10); //brown squar
  fill(255, 155, 0);
  rect(gameChar_x - 12, gameChar_y - 24, 5, 15); //left leg
  rect(gameChar_x + 7, gameChar_y - 24, 5, 15); //right leg
  rect(gameChar_x + 15, gameChar_y - 50, 3, 15); //right arm
  rect(gameChar_x - 18, gameChar_y - 50, 3, 15); //left arm
  fill(0, 40, 255);
  ellipse(gameChar_x + 7, gameChar_y - 60, 5, 5); //right eye
  ellipse(gameChar_x - 7, gameChar_y - 60, 5, 5); //left eye
  fill(200, 140, 100);
  ellipse(gameChar_x, gameChar_y - 50, 5, 5); //mouth
  fill(0, 0, 0);
  rect(gameChar_x - 16, gameChar_y - 9, 10, 6); //left shoe
  rect(gameChar_x + 6, gameChar_y - 9, 10, 6); //right shoe
}
