/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//creating variables
let displayCircle = false;

//Setup()
//
function setup() {
  createCanvas (500, 500);
}


//Draw()
//
function draw() {

  background(0);

  if (mouseIsPressed) {
    displayCircle = true;
  }
  if (displayCircle) {
    ellipse(250, 250, 100, 100);
  }

}
