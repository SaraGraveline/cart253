/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//creating variables
let circle = {
  x: undefined,
  y: undefined,
  size: 100
};

  let dangerZone = {
    x: 250,
    y: 250,
    size: 200
  };

//Setup()
//
function setup() {
  createCanvas (500, 500);

  circle.x = random(0, width);
  circle.y = random(0, height);

  let d = dist(circle.x,circle.y, dangerZone.x, dangerZone.y);
  while (d <circle.size/2 + dangerZone.size/2) {
    circle.x = random(0, width);
    circle.y = random(0, height);
    d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
  }
}


//Draw()
//
function draw() {
  background(0);

  //danger zone
  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);

  //random circle
  fill(150);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);

}
