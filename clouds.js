//function for drawing clouds
function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(255, 255, 255);
    ellipse(
      clouds[i].Pos_x + 100,
      clouds[i].Pos_y + 30,
      clouds[i].size + 5,
      clouds[i].size
    );
    ellipse(
      clouds[i].Pos_x + 55,
      clouds[i].Pos_y + 38,
      clouds[i].size,
      clouds[i].size - 10
    );
    ellipse(
      clouds[i].Pos_x + 145,
      clouds[i].Pos_y + 38,
      clouds[i].size,
      clouds[i].size - 10
    );
  }
}
