/**
Experiments with Variables
Sara Graveline

This project is about learning how to use variables.
*/

"use strict";
//creating Variables
let backgroundShade = 0;

//using javescript object
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2,
};

//Setup()
//
//Makes a canvas
function setup() {
  createCanvas(500, 500);
}


// Draw()
//
//shows different colors, and perfectly centered rectangle.
function draw() {
  backgroundShade = backgroundShade + 1;
  background(backgroundShade);
  circle.x += circle.speed;
  ellipse(circle.x, circle.y, circle.size);
}
