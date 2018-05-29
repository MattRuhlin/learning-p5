const DIAMETER = 20;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

function setup() {
  console.log('here');
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background (255, 224, 137);
}

function draw() {
  console.log('here');
  let circlesAcross = CANVAS_WIDTH / (DIAMETER * 2);
  let circlesDown = CANVAS_HEIGHT / (DIAMETER * 2);
  console.log(circlesAcross);
  console.log(circlesDown);
//  for (var i = 1; i <= circlesAcross; i++) {
//    for (var j = 1; j <= circlesDown; i++) {
//      ellipse(i * DIAMETER, j * DIAMETER, DIAMETER, DIAMETER);
//    }
//  }
}

/*

function draw() {
  if (mouseIsPressed) {
    fill (0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
*/
