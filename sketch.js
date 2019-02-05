var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var particles = [];
var particles2 = [];
var particles3 = [];


var flowfield;

let angle = 100;

function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    background(0);
    cols = floor(width / scl);
    rows = floor(height / scl)
    frameRate(60);

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
    }
    for (var i = 0; i < 500; i++) {
    particles2[i] = new Particle2();
    }
    for (var i = 0; i < 500; i++) {
    particles3[i] = new Particle3();
    }
frameRate(200);
}

function draw() {

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
      for (var x = 0; x < cols; x++) {

      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI*4;
      var v = p5.Vector.fromAngle(angle);

      // v.setMag(1);

      flowfield[index] = v;

      xoff += inc;

      stroke(0, 50);
      strokeWeight(0.3);
    }
    yoff += inc;
    zoff += 0.0001;
  }


  for (var i = 0; i < particles.length; i++) {

    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();

    particles2[i].follow(flowfield);
    particles2[i].update();
    particles2[i].edges();
    particles2[i].show();

    particles3[i].follow(flowfield);
    particles3[i].update();
    particles3[i].edges();
    particles3[i].show();

  }



}
