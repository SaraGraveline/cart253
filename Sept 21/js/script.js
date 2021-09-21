/**
A3 - Moving Pictures
Sara Graveline

This project shows two circles moving towards each other.
*/
"use strict"

let rectangle = {
  x: 0,
  y: undefined,
  size: 5,
  speed: 1,
  yAngle: 0,
};

function setup() {
  createCanvas(600, 600);
  rectangle.y = height / 2;
  background (0);

};

function draw() {

  noFill();
  stroke(255);
  rectMode(CENTER);
  rect(rectangle.x, rectangle.y, rectangle.size, rectangle.size);

  //Move in x
  rectangle.x = rectangle.x + rectangle.speed;
  rectangle.x = constrain(rectangle.x, 0, width);

  //Move in Y
  let yChange = sin(rectangle.yAngle) * 10;
  rectangle.y = rectangle.y + yChange;

  rectangle. yAngle += 0.1;

  //beginShape();
  //vertex(rectangle.x + 30, rectangle.y + 20);
  //vertex(rectangle.x + 85, rectangle.y + 20);
  //vertex(rectangle.x + 85, rectangle.y + 75);
  //endShape(CLOSE);

  //rectangle.x = rectangle.x + rectangle.speed;
  //rectangle.speed += 0.05;
}
