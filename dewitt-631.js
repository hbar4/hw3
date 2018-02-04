colorMode(RGB);
background(255);
strokeWeight(20);
stroke(0);

var a = 20;
var b = 20;
var c = 5;

while(c<=width) {
line(0,  a, b, c);
  a = a + 50;
  b = b + 25;
  c = c + 25;
}
var a = 20;
var c = 320;
while(c<=width) {
line(a,  0, 340, c);
  a = a + 50;
  c = c - 50;
}
