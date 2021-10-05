/**
Function Experiments
Sara Graveline

This is document to experiments with functions and learn about them.
*/

"use strict";

let bg = 0;


function setup() {
  createCanvas(500, 500);
};

function draw() {
  background(bg);

if (keyIsDown(65)) {
  rectMode(CENTER);
  rect(255, 255, 100, 100);
  }
};
