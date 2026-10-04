//function for drawing platforms
function createPlatforms(x, y, length) {
  var p = {
    x: x,
    y: y,
    length: length,
    draw: function () {
      //fill(255,0,127);
      //rect(this.x, this.y, this.length,20);
      fill(255, 225, 40);
      rect(this.x, this.y + 5, this.length, 20);
      fill(50, 80, 255);
      rect(this.x, this.y - 2, this.length, 12);
    },
    checkContact: function (gameChar_x, gameChar_y) {
      if (gameChar_x > this.x && gameChar_x < this.x + this.length) {
        var d = this.y - gameChar_y + 10;
        if (d >= 0 && d < 5) {
          return true;
        }
      }
      return false;
    },
  };
  return p;
}
