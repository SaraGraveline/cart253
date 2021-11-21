/**
More arrays
Sara Graveline

Learning about more arrays
*/

"use strict";

/////////////////this one shows the text and how when clicked new text appears. For more array look below//////////////////////

/*
let soliloquy = [
    `to be or not to be`,
    `that is the question`,
    `whether 'tis nobler in the mind`,
    `to suffer the slings and arrows`,
    `of outrageous fortune`,
    `or to take arms`,
    `against a sea of sorrows`,
    `and by opposing end them.`
];

let currentIndex = 0;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}


function draw() {
  background(0);

  text(soliloquy[currentIndex], width/2, height/2);

};

function mousePressed() {
  currentIndex = currentIndex + 1;

  if (currentIndex === soliloquy.length ) {
    currentIndex = 0;
  }
}

*/

/////////////////this one shows the mouse with a trial. For more array look below////////////////////


let circle = {
  x: 0,
  y: 0,
  size: 100,
  trail: [],
  trailSize: 20
};

let barkSFX;

let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

function preload() {
  barkSFX = loadSound('assets/sounds/bark.wav');
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  circle.x = mouseX;
  circle.y = mouseY;

  for (let i = 0; i < circle.trail.length; i++) {
    let position = circle.trail[i];
    ellipse(position.x, position.y, circle.size);
  }

  ellipse(circle.x, circle.y, circle.size);

  let newTrailPosition = {
    x: circle.x,
    y: circle.y
  };

  circle.trail.push(newTrailPosition);

  if (circle.trail.length > circle.trailSize) {
    circle.trail.shift();
  }
};

function mousePressed() {
  let randomRate = random(rates);
  barkSFX.rate(randomRate);
  barkSFX.play();
}
