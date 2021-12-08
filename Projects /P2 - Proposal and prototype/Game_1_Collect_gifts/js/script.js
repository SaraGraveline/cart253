/**
Project 2: Game 1 - collecting gifts
Sara Graveline

This is the first actual game of my final game. I wanted to do a snake game but I couldn't fully understood how it worked so I mixed thing and created a semi snake game where it needs to avoid the red bricks while collecting the gifts.
I wanted to add more obstacle but I ran out of time.

The snake is the gift train that collect present when it touches them. However, if the gift train touches the red brick wall, the game ends.
The goal of the game is to collect 20 gifts and move on to the next game, game 2 - catching ornaments. The user can't play the other games, if she/he can't complete this game.

Credits:
- For loadsound credits check the sound readme file.
- Snake Game by Lllucas = https://editor.p5js.org/Lllucas/sketches/leC95Xvzk
- Traffic with OOP States by pippinbarr = https://editor.p5js.org/pippinbarr/sketches/OAO9tp_gw
*/

"use strict";

//varibles for different states
let state = "title";

//All the player varibles: player, the player's image, frame rate, the size of the player and the hidden grid/the path where the player travels.
let player;
let playerImage;
let frame = 8;
let size = 90;

//The present varibles: present and the gif for present
let present;
let presentGif;

//Varibles for the obstacles; array and 15 amounts of big obstacle and the obstacleImage
let obstacles = [];
let numBigs = 10;
let obstacleImage;

//the hidden grid where the player travels: gridColumns and gridRows. 18 columns of the grid and 9 rows of the grid
let gridColumns;
let gridRows;

//Varibles for songs and sounds used during the different stages of the game.
let startSong; //song plays when the page loads.
let collectSound; //plays when the present is collected by the player.
let gameWon; //when the game is won
let gameLost; //when the game is lost

//varibles for the images of startpage, deadState page and WonState page.
let startPage;
let deadStateImage;
let wonStateImage;

//Preload function that loads the songs, sound, image and gif of this game.
function preload() {
  //starting song is `all i want for Christmas is you`, CollectSound plays when a gift is collected, gameWon plays when the user wins and gameLost is when the obstacle touches the gift train.
  startSong = loadSound("assets/sounds/All I Want For Christmas Is You.mp3");
  collectSound = loadSound("assets/sounds/collecting_gift.wav");
  gameWon = loadSound("assets/sounds/endsound.mp3");
  gameLost = loadSound("assets/sounds/oops.mp3");

  //presentGif = present, playerImage = gift train, obstacleImage = red brick wall, startPage = Start page, deadStateImage = when the game is over, and wonStateImage = when the game is won.
  presentGif = loadImage("assets/images/present_cute.gif");
  playerImage = loadImage("assets/images/gift_train_border.png");
  obstacleImage = loadImage(`assets/images/brick wall.png`);

  startPage = loadImage(`assets/images/startpage_game1.jpg`);
  deadStateImage = loadImage(`assets/images/deadState_page_game1.jpg`);
  wonStateImage = loadImage(`assets/images/wonstate_game1.jpg`);
};

//Setup function with a defined canvas size. The columns and rows of the hidden grid is divided by the the size with the width and height size of canvas.
function setup() {
  createCanvas(1800, 900);

  //grid: columns = 1800 divided by 100 and rows = 900 divied by 100.
  gridColumns = floor(width / size);
  gridRows = floor(height / size);

  //Calls for the class for the player
  player = new Player();
  frameRate(frame);

  //Calls for the class of present and present Location
  present = new Present();

  //sets the big obstacles randomly on the y and x axis by calling the big class.
  for (let i = 0; i < numBigs; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let big = new Big(x, y);
    obstacles.push(big);
  };

  //set random directions on the obstacle on the x axis
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    let r = random(0, 1);
    if (r < 0.5) {
      obstacle.vx = -obstacle.speed;
    } else {
      obstacle.vx = obstacle.speed;
    };
  };
};

//Draws the background color and defines the different states of this game: Title, simulation, success, dead and hidden.
function draw() {
  //Draws the light blue background colors
  background(255);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `won`) {
    won();
  } else if (state === `dead`) {
    dead();
  };
};

//function for the title which shows the image of start page.
function title() {
  background(startPage);
};

//function for the simulation with player's class, obstacle's class, present's class and scoring, checkhit of if the player touches the red brick. Alsso if statements of won and dead state.
function simulation() {
  //calls on player's class for the player to move with arrow keys on the keyboard, movement, and to draw the player image.
  player.handleInput();
  player.move();
  player.display();


  //draws the static background with loop and x and y variable.
  for (let j = 0; j < 1000; j++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(0);
    point(x,y);
  };

  //calls on the obstacle's class.
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    obstacle.move();
    obstacle.wrap();
    obstacle.display();

    //when the player touches the red brick wall then this happenes.
    player.checkHit(obstacle);
  };

  //if the player alive is false then the game is over with a game lost song and start song stops here.
  if (!player.alive) {
    state = `dead`;
    gameLost.play();
    startSong.stop();
  };

  //if the player has 20 gift/score, the game is won with a gamewon music and no start song.
  if (player.score === 2) {
    state = "won";
    gameWon.play();
    startSong.stop();
  };

  //calls on the present's class to display the present gif.
  displayPresent();

  //when the player eats the present, the presentLocation function starts and during eating the collecting sound plays.
  if (player.eat(present)) {
    presentLocation();
    collectSound.play();
  };
};

//won function with text and score count and a link to next game - Game_2_Catch_ornaments
function won() {
  background(wonStateImage);
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
  fill(254, 249, 209);
  text(`Score = ` + player.score, width / 5.5, height / 6);
  pop();

  let a = createA(
    "https://saragraveline.github.io/cart253/Projects%20/P2%20-%20Proposal%20and%20prototype/Game_2_Catch_ornaments/",
    "Double Click here to start game 2!"
  );
  a.position(width / 8, height / 1.15); //link postion
};

//dead funtion with image and total score.
function dead() {
  startSong.stop();
  background(deadStateImage);

  displayText(`Score = ` + player.score);
};

//display text function for dead state function.
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
  fill(254, 249, 209);
  text(string, width / 1.28, height / 1.74);
  pop();
};

//when the mouse is presed the game goes from title to simulation.
function mousePressed() {
  startSong.play();
  if (state === `title`) {
    state = `simulation`;
  };
};
