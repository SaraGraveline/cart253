/**
Collecting the presents - Game 3 of final project
Sara Graveline

This is the third game of my final game. I am coding the snake game where the player will have to collect the presents before the time runs out.
There will be about 50 presents and after the player successfully collects all, she/he can go back to continue the main game.

 --- need to add ---
  1. timer
  2. begin screen
  3. ending screen
  4. gif of a present
  5. marge it with other games
*/


"use strict";

let player; //varible for player
let playerGif;
let frame = 5; //frame rate of the player
let size = 100; //size of the grid where the player travels and present appears.
let columns; //columns of the grid
let rows; //rows of the grid

let present; //varible for the present
let presentGif;

let backgroundImage;

//Songs
let startSong; //song plays when the page loads.
let collectSound; //plays when the present is collected by the player.
let gameOver; // when a player touches the walls.

function preload () {
  startSong = loadSound("assets/sounds/All I Want For Christmas Is You.mp3");
  collectSound = loadSound("assets/sounds/collecting_gift.wav");
  gameOver = loadSound("assets/sounds/endsound.mp3");
  presentGif = loadImage('assets/images/present_cute.gif');
  playerGif = loadImage('assets/images/gift_train.png');
  backgroundImage = loadImage('assets/images/snow_falling.gif');
};

function setup() {
  createCanvas(windowWidth, windowHeight); //draws the canvas

  columns = floor(width/size);
  rows = floor(height/size);

  player = new Player();
  frameRate(frame);

  present = new Present();
  presentLocation();
};

function draw() {
  background(204, 255, 255); //background black colors

  player.move();
  player.display();

  displayPresent();

  if(player.eat(present)) {
    presentLocation();
    collectSound.play();
  }
};

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    player.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    player.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    player.setDir(0, -1);
  };
};
