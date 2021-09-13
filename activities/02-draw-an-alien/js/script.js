/**************************************************
Activity 02 - Draw an Alien
Sara Graveline

Experiments with P5;s drawing shapes and color funtions.

Currently draws an Alien.
****************************************************/

"use strict";


//setup()
//
//Draws an alien on the canvas.
function setup() {
  createCanvas(640, 480);

  //draws the sky/background
  background(147, 181, 198);
  noStroke();

  //draws the ground
  fill(127, 124, 130);
  rectMode(CENTER);
  rect(320, 450, 640, 80)

  //draws the legs
  fill(234, 234, 234);
  ellipse(280, 425, 40, 50);
  ellipse(360, 425, 40, 50);

  //draws the body
  fill(255, 46, 99);
  ellipse(320, 350, 140, 190)

  //Draws the arms
  fill(234, 234, 234);
  ellipse(270, 335, 40, 80);
  ellipse(370, 335, 40, 80);

  //draws the antennas
  stroke(234, 234, 234);
  strokeWeight(5);
  line(320, 240, 240, 80);
  line(320, 240, 400, 80);

  //draws the antennas' eyes
  noStroke();
  fill(37, 42, 52);
  ellipse(240, 80, 30, 30);
  ellipse(400, 80, 30, 30);

  //draws the antennas' eyeballs
  fill(8, 217, 214);
  ellipse(240, 80, 15, 17);
  ellipse(400, 80, 15, 17);

  //draws the ears
  fill(234, 234, 234);
  ellipse(233, 205, 65, 70);
  ellipse(407, 205, 65, 70);

  //draws the head
  fill(255, 46, 99);
  ellipse(320, 223, 195, 190);

  //draws the eyes
  fill(37, 42, 52);
  ellipse(320-50, 210, 40, 50);
  ellipse(320+50, 210, 40, 50);
  ellipse(320, 170, 40, 50);

  //Draws the eyeballs
  fill(8, 217, 214);
  ellipse(320-50, 210, 20, 30);
  ellipse(320+50, 210, 20, 30);
  ellipse(320, 170, 20, 30);

  //Draws the nostrils
  fill(234, 234, 234);
  ellipse(320, 222, 5, 5);
  ellipse(320-5, 230, 5, 5);
  ellipse(320+5, 230, 5, 5);

  //Draws the mouth
  fill(37, 42, 52);
  ellipse(320, 275, 100, 55);
  fill(8, 217, 214);
  ellipse(320, 275, 80, 40);

}


//draw()
//
//Does nothing.
function draw() {

}
