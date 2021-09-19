/**
E1 - I like to move it
Sara Graveline

This exercise shows 3 shapes with movement, size, and color changes.
It includes map(), constrain(), mouseX, and mouseY.
*/


//background variables
let bg = {
  r: 0,
  g: 0,
  b: 0,
};

//Left Eye variables
let circle1 = {
  x: 0,
  y: 190,
  size: 50,
  growthRate: 0.25,
  speed: 1,
  fill: 255,
};

//Right Eye variables
let circle2 = {
  x: 500,
  y: 190,
  size: 50,
  increase: 0.25,
  speed: 1,
  fill: 255,
};

//Mouth variables
let trapezoid = {
  x: 500,
  y: 200,
  mouseX: 0,
  mouseY: 0,
};


// Setup()
//
//draws canvas and no stroke
function setup() {
  createCanvas(500, 500);
  noStroke();
}


// Draw()
//
//draws face
function draw() {

  //background color with map
  background(bg.r, bg.g, bg.b);
  bg.g = map(circle1.size, -50, width, 0, 255);


  //left eye movement
  circle1.x += circle1.speed;
  circle1.x = constrain(circle1.x, 0, width / 3);

  //left eye size
  circle1.size += circle1.growthRate;
  circle1.size = constrain(circle1.size, 0, 100);

  //left eye shape and fill
  fill(mouseX, mouseY, 0, width, 0, 255);
  ellipse(circle1.x, circle1.y, circle1.size);


  //right eye movement
  circle2.x -= circle2.speed;
  circle2.x = constrain(circle2.x, width / 1.5, width);

  //right eye size
  circle2.size += circle2.increase;
  circle2.size = constrain(circle2.size, 0, 100);

  //right eye shape and fill
  fill(mouseX, mouseY, 0, width, 0, 255);
  ellipse(circle2.x, circle2.y, circle2.size);

  //Mouth color
  fill(mouseX, mouseY, 0, width, 0, 255);

  //mouth shape
  beginShape();
    vertex(140, 300);
    vertex(360, 300);
    vertex(320, 390);
    vertex(180, 390);
  endShape(CLOSE);
}
