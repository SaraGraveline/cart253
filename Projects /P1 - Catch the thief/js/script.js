/**************************************************
Project 1 - Catch the thief
Sara Graveline
A simple game made with my knowledge of Javescript right now.
The goal of this game is for the player/police to catch the thief before he/she steals the diamonds from the bottom of the sea.
****************************************************/

"use strict";

//Variables for images.
let bgStartScreen; //start screen image variable
let bgPlayMode; //middle/game screen image variable
let bgEndScreen; //end screen image variable
let thief; // thief/non-user controlled image variable
let badge; // police/user-controlled image variable

//Variable for the font, Astron by Mason Mulcahy.
let astron;

//Variable for the screen, the function is to switch between start, middle and end screens.
let state = 0;

//Variable for thief/non-user controled.
let player = {
  x: 0,
  y: 0,
  size: 50,
  speed: 2,
  score: 0,
};

//Variable for the police/User-controlled mouse trail.
let trail =[];
let a =0;


//preload
//
//Loads the images and font for each element that requires an image or font.
function preload () {
  //start screen background image
  bgStartScreen = loadImage(`assets/images/startscreen.jpg`);
  //middle/during game background image
  bgPlayMode = loadImage(`assets/images/playmode.jpg`);
  //end/game over background image
  bgEndScreen = loadImage(`assets/images/endscreen-image.jpg`);

  //thief/non-user-controlled image
  thief = loadImage(`assets/images/thief1.png`);
  //police/user-controlled image
  badge = loadImage(`assets/images/police badge-02.png`);

  //Astron font for all the text.
  astron = loadFont(`assets/fonts/Astron.ttf`);
};

//setup
//
//This sets the basic things that are needed for this game like canvas, player's x and size and also noCursor throughout the whole program.
function setup() {
  createCanvas(windowWidth, windowHeight); //creates the canvas
  player.x = random(width); //randomizes where the circle comes from on the x axis.
  player.size = random(40, 80); //randomizes the size of the circle.
  noCursor(); //no cursor at all
};

//draw
//
//This function displays and creates the whole game.
function draw() {
  //if statement for the state variable. This changes the screens from start, middle or to end.
  if(state == 0) {
    startScreen()
  }else if (state == 1) {
    playMode()
  }else if (state == 2) {
    endScreen()
  };
};

//start screen - intro screen
//
//This function is for the start screen/ intro screen.
function startScreen(){
  background(bgStartScreen); //background image
  noStroke();
  fill(255, 0, 150) //hot pink color
  textAlign(CENTER);
  textSize(30);
  textFont(`astron`); //Astron font for loadFont
  text('HELLO! WELCOME AND PLEASE ENJOY THIS GAME', width/2, height/2); //intro text which is in the center of the canvas.
  text(`To start please click anywhere`, width/2, height/2+50); //instructions for the player to move on to next screen(playmode).
  reset(); //reset function when the player lose the game they come back to this.
};

//play mode - middle screen
//
//This function runs and displays the whole games
function playMode(){
  background(bgPlayMode); //background image
  noStroke();

  //displays and shows that image of the thief.
  image(thief, player.x, player.y, player.size, player.size);

  //makes the thief move on the canvas
  player.y += player.speed;

  //if statement of when the layer hits the bottom, the end screen appears (game over).
  if (player.y>height){
    state = 2 //end screen
  };

  //if statement for when the circle hits the bottom, a new random size, speed, and on different x axis, a new thief appears.
  if (player.y > height){
    player.x = random(width); //random x-axis
    player.speed = random(3, 7); // random speed
    player.size = random(40, 80); // random size
    player.y = 0; //the thief always appears on the 0 value of the y-axis.
  };

  //if statement for when the police badge touches a thief.
  if (mouseX > player.x-40 && mouseX < player.x+40 && mouseY > player.y - 40 && mouseY < player.y + 40) {
    player.y = 0;
    player.x = random(width);
    player.score = player.score + 1; // the player scores when the police badge catches the thief.
    player.speed = random(3,12);
    player.size = random (40, 80);
  };

  //this is for the police badge/user-controlled.
  trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    //displays the image, size of the police badge
    image(badge, trail[i][0], trail[i][1], 110, 100, a);
      if(a > 100) {
        trail.shift();
        a = 10;
      }
      a += 8;
    };

  //text and placement for the score numbers on the top right corner
  textSize(20);
  textFont(`astron`);
  text(`Your score =`, 110, 60); //text with the x and y position
  text(player.score, 213, 62); //score number with the x and y position

  //if statement if the player reaches 50 score, they get a motivated text to keep going and scoring more.
  if (player.score === 50) {
    //displays a thief around the middle of the canvas.
    player.x = width/2-70;
    player.y = height/2-140;
    player.speed = 0;
    player.size = 100;
    //motivated text - WooHoo!! Can you score 300, now? - in the middle of the screen in Astron font with 20 font size in white color.
    textSize(20);
    fill(255);
    textFont(`astron`);
    text(`WOOHOO!! Can you score 300, Now?`, width/2, height/2)
  };
};

//end screen - game over
//
//This function displays and runs the end screen of this game
function endScreen(){
  background(bgEndScreen); //background image
  textAlign(CENTER);
  textFont(`astron`);
  textSize(25);
  text(`OOPS! GAME OVER`, width/2, height/2-20); //first text in the middle of the canvas.
  text(`SCORE = ` +player.score, width/2, height/2+20); //Second text displays the total score near the middle of the canvas.
  text(`CLICK TO PLAY AGAIN`, width/2, height/2+60); //Third text gives instructions to play again, again in the middle of the canvas.
};

//Mouse pressed
//
//this function is for moving from one screen to the next whenever the mouse is pressed.
function mousePressed (){
  //if the player is on the start screen and she/he presses the mouse, they will go to the play mode screen(simulation state).
  if(state == 0){
    state = 1
  //if the player is on the end screen - game over, then she/he will go the state screen if the mouse is pressed.
  } else if(state == 2){
    state = 0
  };
};

//reset
//
//this function resets the game.
function reset(){
  player.state = 0;
  player.speed = 1;
  player.y = -2;
};

//Thank you and have fun playing this game! :):)
