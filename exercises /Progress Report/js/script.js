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

//All the player varibles: player, the player's image, frame rate, the size of the player and the hidden grid/the path where the player travels.
let player;
let playerImage;
let frame = 8;
let size = 100;


//the hidden grid where the player travels: columns and rows.
let columns; //18 columns of the grid
let rows; //9 rows of the grid

//The present varibles: present and the gif for present
let present;
let presentGif;


//Songs and sounds used during the different stages of the game.
let startSong; //song plays when the page loads.
let collectSound; //plays when the present is collected by the player.
let gameOver; // when a player touches the walls.

//Preload function that loads the songs, sound, image and gif of this game.
function preload () {
  //starting song, play during collecting to gifts, and when the player dies
  startSong = loadSound("assets/sounds/All I Want For Christmas Is You.mp3");
  collectSound = loadSound("assets/sounds/collecting_gift.wav");
  gameOver = loadSound("assets/sounds/endsound.mp3");

  //present gif of a present and player's image of a gift train
  presentGif = loadImage('assets/images/present_cute.gif');
  playerImage = loadImage('assets/images/gift_train.png');
};


//Setup function with a defined canvas size. The columns and rows of the hidden grid is divided by the the size with the width and height size of canvas.
function setup() {
  createCanvas(1800, 900);

  //grid: columns = 1800 divided by 100 and rows = 900 divied by 100.
  columns = floor(width/size);
  rows = floor(height/size);

  //Calls for the class for the player
  player = new Player();
  frameRate(frame);

  //Calls for the class of present and present Location
  present = new Present();
};

function draw() {
  //Draws the light blue background colors
  background(204, 255, 255);

  //calls on player's class for the player to move and to draw the player image.
  player.handleInput();
  player.move();
  player.display();

  //calls on the present's class to display the present gif.
  displayPresent();

  //when the player eats the present, the presentLocation function starts and during eating the collecting sound plays.
  if(player.eat(present)) {
    presentLocation();
    collectSound.play();
  }
};
