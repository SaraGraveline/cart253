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
  x: 250,
  y: 250,
  size: 200,
  speed: 2,
  fill: 0,
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
  background(backgroundShade);

  //random numbers
  circle.speed = random(-5, 5);
  circle.x += circle.speed;
  circle.y = random(0, height);
  circle.size = random(10, 100);

  circle.fill = random(0,255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);

  //random numbers
  let randomNumber = random();

  //debugging variales
  console.log(`circle.x: ${circle.x} circle.y: ${circle.y} circle.size: ${circle.size} circle.speed: ${circle.speed}`);


}
