/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//Creating variables
let backgroundShade = 0;

let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 5,
}


//Setup()
//
function setup() {
  createCanvas (500, 500);
}


//Draw()
//
function draw() {
  background (backgroundShade);

//moving the circle
  circle.x += circle.speed;

//constraining the circle from going outside of the canvas
  if (circle.x > width) {
    circle.speed = -circle.speed;
  }

  if (circle.x < 0) {
    circle.speed = -circle.speed;
  }

//changing the color of the circle
  if (mouseY < height/2) {
    fill(255, 0, 0);
  }

  if (mouseY > height/2) {
    fill(0, 0, 255);
  }

//drawing the circle
  ellipse (circle.x, circle.y, circle.size);
}
