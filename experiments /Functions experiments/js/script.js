/**
Function Experiments
Sara Graveline

This is document to experiments with functions and learn about them.
*/

"use strict";

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}


function setup() {
  createCanvas(500, 500);

};

function draw() {
  background(0);

  let change = random();
  if(change < 0.05) {
    circle.vx = random (-circle.speed, circle.speed);
    circle.vy = random (-circle.speed, circle.speed);
  }


  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);

};
