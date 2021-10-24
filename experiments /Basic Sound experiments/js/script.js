/**
Basic Sound
Sara Graveline

Learned how to put musis/sound in my program.  
*/

"use strict";

let music;


/**
Description of preload
*/
function preload() {
  music = loadSound(`assets/sounds/bark.wav`);
};


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
};


/**
Description of draw()
*/
function draw() {
  background(0);
};

function mousePressed(){
  tryMusic();
};

function keyPressed(){
  tryMusic();
};

function tryMusic() {
  if (!music.isPlaying()){
    music.loop();
  };
};
