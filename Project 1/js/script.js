/**
Project 1
Sara Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/


"use strict";

//variable for the tail (user-control)
let tail = [];
let policeBadge;

function preload() {
  policeBadge=loadImage('assets/images/police badge-02.png');
}


// Setup function
//
// Draws the canvas.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();
};


// Draw function
//
//Draws the mouse and mouse tail.
function draw() {
  background(0);

  // Creates the other circles at the end of the tail.
  tail.push({x: mouseX, y: mouseY});

  // This constrains the tail from getting to long.
  if (tail.length > 10) {
    tail.shift();
  };

  // This draws the tail.
  for(let i = 0; i < tail.length; i++) {
     let x = tail[i].x;
     let y = tail[i].y;

     // and larger closer to the mouse
    image(policeBadge, x, y, 174 + i , 149 + i);
  };
};
