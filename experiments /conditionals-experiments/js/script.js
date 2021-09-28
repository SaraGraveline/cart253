/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//creating variables
let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let circle = {
  x: 250,
  y: 250,
  size: 100
};


//Setup()
//
function setup() {
  createCanvas (500, 500);
}

//Draw()
//
function draw() {
  background(bg.r, bg.g, bg.b);

  ellipse(circle.x, circle.y, circle.size);
}

  function mouseWheel() {
    bg.r = random(0, 255);
    bg.g = random(0, 255);
    bg.b = random(0, 255);
  }
