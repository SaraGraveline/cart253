/**
Learning about conditionals
Sara Graveline

This document is about experimenting with conditionals.
*/

"use strict";

//creating variables
let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}

//Setup()
//
function setup() {
  createCanvas (500, 500);
}


//Draw()
//
function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100);

  //let x = caterpillar.x;
  //let numSegments = 5;
  //let segmentDrawn = 0;
  //
  //while (segmentDrawn < numSegments) {
  //  ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //  x += 40;
  //  segmentDrawn += 1;
  // }

 // or smaller version is loops is

 let x = caterpillar.x;
 let numSegments = 8;

 for (let i = 0; i < numSegments; i++) {
   ellipse (x, caterpillar.y, caterpillar.segmentSize);
   x += 40;
 }

}
