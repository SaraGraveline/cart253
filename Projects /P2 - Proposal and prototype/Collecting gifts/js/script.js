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

let state = 'title';

//All the player varibles: player, the player's image, frame rate, the size of the player and the hidden grid/the path where the player travels.
let player;
let playerImage;
let frame = 8;
let size = 90;

//Varibles for the obstacles; array and 15 amounts of big obstacle.
let obstacles = [];
let numBigs = 15;


//the hidden grid where the player travels: columns and rows.
let columns; //18 columns of the grid
let rows; //9 rows of the grid

//The present varibles: present and the gif for present
let present;
let presentGif;


//Varibles for songs and sounds used during the different stages of the game.
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

  //sets the big obstacles randomly on the y and x axis by calling the big class.
  for (let i = 0; i < numBigs; i++) {
    let x = random(0,width);
    let y = random(0,height);
    let big = new Big(x,y);
    obstacles.push(big);
  };

  //set random directions on the obstacle on the x axis
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    let r = random(0,1);
    if (r < 0.5) {
      obstacle.vx = -obstacle.speed;
    }
    else {
      obstacle.vx = obstacle.speed;
    }
  };
};


//Draws the background color and defines the different states of this game: Title, simulation, success, dead and hidden.
function draw() {
  //Draws the light blue background colors
  background(204, 255, 255);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `success`) {
    success();
  }
  else if (state === `dead`) {
    dead();
  }
};

function title() {
  displayText(`Please help Jungkook plan his first Christmas by collecting gifts!`);
};


function simulation() {
  //calls on player's class for the player to move with arrow keys on the keyboard, movement, and to draw the player image.
  player.handleInput();
  player.move();
  player.display();


  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    obstacle.move();
    obstacle.wrap();
    obstacle.display();

    player.checkHit(obstacle);
  }


  if (!player.alive){
    state = `dead`;
  }

  //calls on the present's class to display the present gif.
  displayPresent();

  //when the player eats the present, the presentLocation function starts and during eating the collecting sound plays.
  if(player.eat(present)) {
    presentLocation();
    collectSound.play();
  };
};

function success() {
  displayText(`Thank you so much for your help!`);
};

function dead() {
  displayText(`Oh Noooo! Please try again!`);
};

function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text(string, width/2, height/2);
  pop();
};

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
};
