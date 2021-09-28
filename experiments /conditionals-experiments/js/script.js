/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//creating variables
let angle = 0;

//Setup()
//
function setup() {
  createCanvas (500, 500);
}

//Draw()
//
function draw() {
  background(0);

  push();
  fill (255, 0, 0);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(angle);
  scale(3);
  rect(0, 0, 100, 100);
  pop();

  angle = angle + 0.01;

}
