//function for drawing mountains
function drawMountains() {
  for (var i = 0; i < mountains.length; i++) {
    fill(204, 102, 0);
    triangle(
      mountains[i].Pos_x + 120,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x + 60,
      mountains[i].Pos_y - 190
    );
    triangle(
      mountains[i].Pos_x + 260,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x + 70,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x + 190,
      mountains[i].Pos_y - 280
    );
    triangle(
      mountains[i].Pos_x + 340,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x + 180,
      mountains[i].Pos_y + 32,
      mountains[i].Pos_x + 290,
      mountains[i].Pos_y - 190
    );
    //snow
    fill(245, 235, 255);
    beginShape();
    vertex(mountains[i].Pos_x + 60, mountains[i].Pos_y - 190);
    vertex(mountains[i].Pos_x + 49, mountains[i].Pos_y - 150);
    vertex(mountains[i].Pos_x + 55, mountains[i].Pos_y - 140);
    vertex(mountains[i].Pos_x + 60, mountains[i].Pos_y - 150);
    vertex(mountains[i].Pos_x + 74, mountains[i].Pos_y - 140);
    endShape();
    fill(245, 235, 255);
    beginShape();
    vertex(mountains[i].Pos_x + 190, mountains[i].Pos_y - 280);
    vertex(mountains[i].Pos_x + 171, mountains[i].Pos_y - 230);
    vertex(mountains[i].Pos_x + 178, mountains[i].Pos_y - 210);
    vertex(mountains[i].Pos_x + 185, mountains[i].Pos_y - 230);
    vertex(mountains[i].Pos_x + 208, mountains[i].Pos_y - 200);
    endShape();
    fill(245, 235, 255);
    beginShape();
    vertex(mountains[i].Pos_x + 290, mountains[i].Pos_y - 190);
    vertex(mountains[i].Pos_x + 270, mountains[i].Pos_y - 150);
    vertex(mountains[i].Pos_x + 280, mountains[i].Pos_y - 140);
    vertex(mountains[i].Pos_x + 290, mountains[i].Pos_y - 150);
    vertex(mountains[i].Pos_x + 301, mountains[i].Pos_y - 140);
    endShape();
  }
}
