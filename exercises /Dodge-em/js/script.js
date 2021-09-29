/**
Exercise 2: Dodging the bounce balls
Sara Graveline

The idea for this activity is to make a simulation of bounce balls and user control one circle. The different color circles represents randomness.
The goal of this simulation is to let the user control their circle with the position of the mouse.
When the bounce balls comes in contact with the user circle, the simulation stops. When the mouse move left side of the screen, one picture show whereas if the mouse move to the right side, another image shows.
The end goal is to have fun and be happy.
*/


"use strict";


// creating variable for the background photos
let leftSide = undefined;
let rightSide = undefined;

//creating the variable for the simualtion and these three line code is taken from codeacademy.
let t;
let x; // X position
let y; // Y position

//variables for bounce balls
let bounce = {
  x: 0,
  y: 0,
  size: 50,
  t: 0
};

//variables for user circle
let userControl = {
  x: 0,
  y: 0,
  size: 50,
  fill: 255
}


// preload()
//
//this function contains the two photo that are used in the background.
function preload() {
  leftSide = loadImage(`assets/images/texture-left.jpg`);
  rightSide = loadImage(`assets/images/texture-right.jpg`);
};


// setup()
//
//this function creates the canvas.
function setup () {
  createCanvas(windowWidth, windowHeight);

  //sets the background to black
  background(0);
  t = 0;

  //draws no stroke
  noStroke();

};

// draw()
//
//this function allows the images to switch from right side to left with the mouse position.
function draw() {
  background(0, 16);

  //making the image center
  imageMode(CENTER);

  //using the if and else statement to allow the background images to switch from left to right with the mouse position.
  if (mouseX < width/2) {
    //leftSide
    image(leftSide, width/2, height/2, windowWidth, windowHeight);
  } else {
    //rightSide
    image(rightSide, width/2, height/2, windowWidth, windowHeight);
  };

  //setting the ellipse x and y position to be random
  bounce.x = random(0, width);
  bounce.y = random(0, height);

  //setting the fill to be a random color
  fill(random(0, 256), random(0, 256), random(0, 256));


  //setting the x and y position for the bouncing balls (codeacademy)
  x = width * noise(t+15);
  y = height * noise (t+5);

  //setting the user control mouse
  userControl.x = mouseX;
  userControl.y = mouseY;

  //Checks for catching bounce balls with variable.
  let d = dist(userControl.x, userControl.y, bounce.x, bounce.y);

  //checks for catching bounce balls with if statement and also code line where the simulation stops if both circles touch each other.
  if (d < bounce.size/2 + userControl.size/2) {
    noLoop();
  }

  //creating the ellipse from bounce balls variables
  ellipse(bounce.x, bounce.y, 50, 50);

  //fill for the user ellipse
  fill(255);

  //creating the user ellipse with the variables
  ellipse(userControl.x, userControl.y, userControl.size);

};
