/**
Experiments with Variables
Sara Graveline

This project is about learning how to use variables.
*/

"use strict";
//creating Variables
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;
let circleAcceleration = 0.25;


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
  circleX += circleSpeed
  circleX += circleAcceleration;
  ellipse(circleX, circleY, circleSize);
}
