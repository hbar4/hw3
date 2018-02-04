function setup() {
createCanvas (340,340);
}

function draw() {
colorMode(RGB);
background(255);
strokeWeight(1);
stroke(0);

var x = 10;

while(x <= mouseX) {
line(170,  0, x, 330);
x = x + 10;
}
}
