//function for creating the enemy
function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;
  this.currentX = x;
  this.inc = 1;
  this.update = function () {
    this.currentX += this.inc;
    if (this.currentX >= this.x + this.range) {
      this.inc = -1;
    } else if (this.currentX < this.x) {
      this.inc = 1;
    }
  };
  this.draw = function () {
    this.update();
    //horns
    fill(55, 10, 250);
    triangle(
      this.currentX - 45,
      this.y - 72,
      this.currentX - 11,
      this.y - 12,
      this.currentX - 18,
      this.y - 42
    );
    triangle(
      this.currentX + 50,
      this.y - 75,
      this.currentX + 13,
      this.y - 25,
      this.currentX + 22,
      this.y - 19
    );
    triangle(
      this.currentX - 35,
      this.y + 12,
      this.currentX - 15,
      this.y - 1,
      this.currentX - 14,
      this.y - 30
    );
    triangle(
      this.currentX + 35,
      this.y + 12,
      this.currentX + 15,
      this.y - 1,
      this.currentX + 20,
      this.y - 40
    );
    //body
    fill(60, 10, 70);
    rect(this.currentX - 16, this.y - 40, 40, 40);
    //eyes
    fill(255, 0, 0); // Red color
    ellipse(this.currentX - 3, this.y - 28, 15, 15);
    ellipse(this.currentX + 17, this.y - 28, 15, 15);
    fill(0); // Black color
    ellipse(this.currentX - 3, this.y - 28, 13, 13);
    ellipse(this.currentX + 17, this.y - 28, 13, 13);
    fill(255); // White color
    ellipse(this.currentX - 3, this.y - 28, 9, 9);
    ellipse(this.currentX + 17, this.y - 28, 9, 9);
    fill(0); // Black color
    ellipse(this.currentX - 3, this.y - 28, 5, 5);
    ellipse(this.currentX + 17, this.y - 28, 5, 5);
    //mouth code
    fill(255, 0, 0); // Red color
    fill(255, 0, 0); // Red color
    ellipse(this.currentX + 7, this.y - 13, 20, 10);
    fill(0); // Black color
    ellipse(this.currentX + 7, this.y - 13, 15, 6);
    fill(255, 0, 0); // Red color
    ellipse(this.currentX + 7, this.y - 13, 10, 4);
  };
  this.checkContact = function (gameChar_x, gameChar_y) {
    var d = dist(gameChar_x, gameChar_y, this.currentX, this.y);
    if (d < 45) {
      dieSound.play();
      return true;
    }
    return false;
  };
}
