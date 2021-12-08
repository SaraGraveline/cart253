/**************************************************
Project 2 - Catch the ornaments
Sara Graveline

The player has to help Jungkook with catching all the ornaments. Don't let them touch the ground becuase it will break if it does. And after catching 25 of them, you can go back to the main (matching game) and complete that game.

credits: mouse trails -- by mrbombmusic
****************************************************/

"use strict";

//Variables for images.
let bgStartScreen; //start screen image variable
let bgPlayMode; //middle/game screen image variable
let bgEndScreen; //end screen image variable
let bgWonScreen;
let ornaments; //
let badge; //

//Variable for the screen, the function is to switch between start, middle and end screens.
let state = 0;

//Variable for ornaments/non-user controled.
let player = {
  x: 0,
  y: 0,
  size: 50,
  speed: 2,
  score: 0,
};

//Variable for the player/User-controlled mouse tail .
let tail = [];
let a = 0;

//Variable for the font, Astron by Mason Mulcahy.
let astron;

//Loads the images and font for each element that requires an image or font.
function preload() {
  //start screen background image
  bgStartScreen = loadImage(`assets/images/startpage_game2.jpg`);
  //middle/during game background image
  bgPlayMode = loadImage(`assets/images/dark-image.jpg`);
  //end/game over background image
  bgEndScreen = loadImage(`assets/images/deadstate_image .jpg`);

  bgWonScreen = loadImage(`assets/images/wonstate_image.jpg`);

  //tornaments/non-user-controlled image
  ornaments = loadImage(`assets/images/ornaments-ball.png`);
  //player/user-controlled image
  badge = loadImage(`assets/images/hand.png`);

  //Astron font for all the text.
  astron = loadFont(`assets/fonts/Astron.ttf`);
}

//This sets the basic things that are needed for this game like canvas, player's x and size and also noCursor throughout the whole program.
function setup() {
  createCanvas(windowWidth, windowHeight); //creates the canvas
  player.x = random(width); //randomizes where the circle comes from on the x axis.
  player.size = random(40, 80); //randomizes the size of the circle.
  noCursor(); //no cursor at all
}

//This function displays and creates the whole game.
function draw() {
  //if statement for the state variable. This changes the screens from start, middle or to end.
  if (state == 0) {
    title();
  } else if (state == 1) {
    playMode();
  } else if (state == 2) {
    dead();
  } else if (state == 3) {
    won();
  }
}

//This function is for the start screen/ intro screen.
function title() {
  background(bgStartScreen); //background image
  reset(); //reset function when the player lose the game they come back to this.
}

//This function runs and displays the whole games
function playMode() {
  background(bgPlayMode); //background image
  noStroke();

  //text and placement for the score numbers on the top right corner
  textSize(20);
  textFont(`astron`);
  fill(255);
  text(`Your score =`, 20, 63); //text with the x and y position
  text(player.score, 213, 62); //score number with the x and y position

  //displays and shows that image of the ornaments.
  image(ornaments, player.x, player.y, player.size, player.size);

  //makes the ornaments move on the canvas
  player.y += player.speed;

  //if statement of when the layer hits the bottom, the end screen appears (game over).
  if (player.y > height) {
    state = 2; //end screen
  }

  //if statement for when the circle hits the bottom, a new random size, speed, and on different x axis, a new ornaments appears.
  if (player.y > height) {
    player.x = random(width); //random x-axis
    player.speed = random(3, 7); // random speed
    player.size = random(40, 70); // random size
    player.y = 0; //the ornaments always appears on the 0 value of the y-axis.
  }

  //if statement for when the player badge touches a ornaments.
  if (
    mouseX > player.x - 40 &&
    mouseX < player.x + 40 &&
    mouseY > player.y - 40 &&
    mouseY < player.y + 40
  ) {
    player.y = 0;
    player.x = random(width);
    player.score = player.score + 1; // the player scores when the player badge catches the ornaments.
    player.speed = random(3, 12);
    player.size = random(40, 80);
  }

  //this is for the player badge/user-controlled.
  tail.push([mouseX, mouseY]);
  for (let i = 0; i < tail.length; i++) {
    noStroke();
    //displays the image, size of the player badge
    image(badge, tail[i][0], tail[i][1], 110, 100, a);
    if (a > 100) {
      tail.shift();
      a = 10;
    }
    a += 8;
  }

  //if the player has 20 gift/score, the game is won with a gamewon music and no start song.
  if (player.score === 3) {
    state = 3;
  }
}

//This function displays and runs the end screen of this game
function dead() {
  background(bgEndScreen); //background image
  displayText(`Score = ` + player.score);
}

//display text function for dead state function.
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  noStroke();
  fill(255);
  text(string, width / 4.7, height / 1.59);
  pop();
}

function won() {
  background(bgWonScreen);
  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  noStroke();
  fill(255);
  text(`Score = ` + player.score, width / 1.23, height / 1.46);
  cursor();
  pop();

  let a = createA(
    "https://saragraveline.github.io/cart253/Projects%20/P2%20-%20Proposal%20and%20prototype/Game_3_Match_Relatives_list%20/",
    "Double Click here to start game 2!"
  );
  a.position(width / 1.35, height / 1.1); //link postion
}

//this function is for moving from one screen to the next whenever the mouse is pressed.
function mousePressed() {
  //if the player is on the start screen and she/he presses the mouse, they will go to the play mode screen(simulation state).
  if (state == 0) {
    state = 1;
    //if the player is on the end screen - game over, then she/he will go the state screen if the mouse is pressed.
  } else if (state == 2) {
    state = 0;
  }
}

//this function resets the game.
function reset() {
  player.state = 0;
  player.speed = 1;
  player.y = -2;
  player.score = 0;
}

//Thank you and have fun playing this game! :):)
