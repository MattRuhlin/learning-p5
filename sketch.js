const DIAMETER = 40;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

function setup() {
  noLoop();

  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background (255, 224, 137);
}

function draw() {
  noLoop();

  console.log('here');
  let circlesAcross = CANVAS_WIDTH / (DIAMETER * 2);
  let circlesDown = CANVAS_HEIGHT / (DIAMETER * 2);

  for (var i = .5; i <= circlesAcross; i++) {
    for (var j = .5; j <= circlesDown; j++) {
      ellipse(2 * i * DIAMETER, 2 * j * DIAMETER, DIAMETER, DIAMETER);
    }
  }
}
