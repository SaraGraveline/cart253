/**
Mono Lisa
Sara Graveline

This program tries to draw Mono Lisa.
*/

"use strict";



/**
Description of setup
*/
function setup() {

  createCanvas(240, 350)

  //the background
  background(144, 191, 122);

  //mono's hair
  fill(10, 20, 10);
  ellipse(130, 87.5, 100, 120);

  //mono's face
  noStroke()
  fill(222, 182, 93)
  ellipse(120, 87.5, 60, 80);

  //smile
  stroke(0);
  line(100, 100, 120, 105)
  line(120, 105, 140, 103)

}


/**
Description of draw()
*/
function draw() {

}
