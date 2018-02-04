colorMode(RGB);
background(255);
strokeWeight(1);
stroke(0);

var a =170;
var b = 0;
var c = 170;
while(c <= width) {//top half of diamond
line(a,  b, c, b);
  a = a - 10;
b = b + 10;
  c = c + 10;
}

var a =0;
var b = 170;
var c = 340;
while(b <= width) {//bottom half of diamond
line(a,  b, c, b);
  a = a + 10;
b = b + 10;
  c = c - 10;
}
