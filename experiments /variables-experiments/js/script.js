/**
Experiments with Variables
Sara Graveline

This project is about learning how to use variables.
*/

"use strict";

//Setup()
//
//Makes a canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}


// Draw()
//
//shows different colors, and perfectly centered rectangle.
function draw() {
  background(mouseX, mouseY, 0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);
}
