colorMode(RGB);
background(0);
strokeWeight(1);
stroke(255);

var x = 0;

while(x <= width) {
line(x,  0, x, 330);
x = x + 5;
}

fill(0);
rect(40,40,250,250);

var y = 40;
while(y < 290) {
line(40,  y, 290, y);
y = y + 5;
}
