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
  speed: 1,
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

  fill(255, 255, 255);


// learned about the if... or... then...
  if (circle.x < width/3 || circle.x > 2 * width/3) {
      fill(255, 0, 0);
  }

/*
// learned about the if... and... then...
  if (circle.x > width/3 && circle.x < 2 * width/3) {
      fill(255, 0, 0);
  }
*/


  //drawing the circle
    ellipse (circle.x, circle.y, circle.size);

/*
  // learned about the if... else if... then else...
  if (mouseX < width/3) {
    fill(255, 0, 0);
  }
  else if (mouseX < 2 * width/3) {
    fill(0, 255, 0);
  }

  else {
    fill(0,0,255);
  }
*/

}
