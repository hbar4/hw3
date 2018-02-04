colorMode(RGB);
background(255);
strokeWeight(0.5);
stroke(0);

var x = 0;
var y = 0;

while(x <= width) {
line(x,  0, x, y);
x = x + 5;
  y = y + 10;
}
