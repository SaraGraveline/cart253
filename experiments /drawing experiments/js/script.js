/*****************************************************
Drawing Experiments
Sara Graveline

Experiments with p5's drawing and color funtions.

Currently draws a flower.
*******************************************************/

"use strict";


//[preload()
//
//does nothing
function preload() {

}


//setup()
//
//Draws a flower on the canvas.
function setup() {
  createCanvas (500, 500);

  //set the background to black.
  background(0, 0, 0);

  //set all the ellipses to corner.
  ellipseMode(CORNER);

  //all of the yellow ellipses and fills without the stroke.
  noStroke();
  fill(161, 161, 2);
  ellipse(250, 250, 100, 100);
  fill(184, 184, 20);
  ellipse(250, 250, 80, 80);
  fill(230, 230, 23);
  ellipse(250, 250, 60, 60);
  fill(245, 245, 78);
  ellipse(250, 250, 40, 40);
  fill(252, 252, 144);
  ellipse(250, 250, 20, 20);
  fill(247, 247, 193);
  ellipse(250, 250, 10, 10);

  //all of the blue ellipses and fills without the stroke.
  noStroke();
  fill(7, 92, 163);
  ellipse(150, 150, 100, 100);
  fill(15, 125, 217);
  ellipse(170, 170, 80, 80);
  fill(35, 151, 247);
  ellipse(190, 190, 60, 60);
  fill(88, 174, 245);
  ellipse(210, 210, 40, 40);
  fill(127, 192, 245);
  ellipse(230, 230, 20, 20);
  fill(173, 214, 247);
  ellipse(240, 240, 10, 10);

  //all of the green ellipses and fills without the stroke.
  noStroke();
  fill(6, 148, 79);
  ellipse(250, 150, 100, 100);
  fill(11, 181, 98);
  ellipse(250, 170, 80, 80);
  fill(22, 245, 136);
  ellipse(250, 190, 60, 60);
  fill(100, 250, 180);
  ellipse(250, 210, 40, 40);
  fill(160, 250, 210);
  ellipse(250, 230, 20, 20);
  fill(204, 255, 230);
  ellipse(250, 240, 10, 10);

  //all of the red ellipses and fills without the stroke.
  noStroke();
  fill(173, 7, 7);
  ellipse(150, 250, 100, 100);
  fill(245, 22, 22);
  ellipse(170, 250, 80, 80);
  fill(250, 77, 77);
  ellipse(190, 250, 60, 60);
  fill(247, 119, 119);
  ellipse(210, 250, 40, 40);
  fill(245, 159, 159);
  ellipse(230, 250, 20, 20);
  fill(245, 201, 201);
  ellipse(240, 250, 10, 10);

}



//draw()
//
//Does nothing.
function draw() {

}
