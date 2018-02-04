function setup() { 
  createCanvas(400, 400);
  background(200);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX, mouseY, diameter);
  }
}
function keyPressed() {
  print(key);
  if (key == 'L') {
    fill(204, 153, 255);
  } else if (key == 'B') {
    fill(153, 204, 255);
  } else if (key == 'G') {
    fill(204, 255, 229); 
  } else if (key == 'X') {
    fill(255, 153, 153); 
  } else if (key == 'Y') {
    fill(204, 229, 255); 
  } else if (key == 'Z') {
    fill(224, 224, 224); 
  }
}
