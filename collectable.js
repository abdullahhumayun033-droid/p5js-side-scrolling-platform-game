//code for drawing collectable
function drawCollectable(t_collectable) {
  //hotdog
  fill(255, 38, 38);
  ellipse(
    t_collectable.Pos_x - 20,
    t_collectable.Pos_y + 300,
    t_collectable.size + 25,
    t_collectable.size - 32
  );
  //bread
  fill(255, 179, 102);
  ellipse(
    t_collectable.Pos_x - 20,
    t_collectable.Pos_y + 292,
    t_collectable.size - 1,
    t_collectable.size - 41
  );
  ellipse(
    t_collectable.Pos_x - 20,
    t_collectable.Pos_y + 308,
    t_collectable.size - 1,
    t_collectable.size - 41
  );
}

//function to check if the collectable item is being collected
function checkCollectable(t_collectable) {
  if (
    dist(
      t_collectable.Pos_x - 20,
      t_collectable.Pos_y + 300,
      gameChar_x,
      gameChar_y - 80
    ) < 60
  ) {
    t_collectable.isFound = true;
    game_score += 1;
    collectableSound.play();
  }
}

//adding multiple collectables
function addCollectable(t_collectable) {
  for (var i = 0; i < t_collectable.length; i++) {
    if (t_collectable[i].isFound == false) {
      checkCollectable(t_collectable[i]);
      drawCollectable(t_collectable[i]);
    }
    t_collectable[i].isFound = false;
  }
}
