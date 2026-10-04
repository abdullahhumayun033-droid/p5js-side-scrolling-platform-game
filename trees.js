//function for drawing trees
function drawTrees() {
  for (var i = 0; i < treePos_x.length; i++) {
    // draw tree
    fill(153, 76, 0);
    rect(treePos_x[i] - 40, treePos_y + 35, 30, 120);
    fill(0, 153, 0);
    //trees
    ellipse(treePos_x[i] - 25, treePos_y + 10, 115, 115);
    fill(255, 50, 0);
    //fruits
    ellipse(treePos_x[i] - 40, treePos_y + 35, 20, 20);
    ellipse(treePos_x[i] - 5, treePos_y + 45, 20, 20);
    ellipse(treePos_x[i] - 20, treePos_y - 10, 20, 20);
    ellipse(treePos_x[i] - 55, treePos_y, 20, 20);
    ellipse(treePos_x[i] + 20, treePos_y + 15, 20, 20);
  }
}
