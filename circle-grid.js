function setup() {
createCanvas (340,340);
}

function draw() {
background(0);
strokeWeight(2);
stroke(255);

for (var x = 20; x <= width; x = x +30) {
for (var y = 20; y <= height; y = y +30) {
fill(255);
ellipse(x, y, 20, 20);
}
}
}
