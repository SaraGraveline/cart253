/**************************************************
Project 2 - Catch the ornaments
Sara Graveline

The ornaments has to help Jungkook with catching all the ornaments. Don't let them touch the ground becuase it will break if it does. And after catching 25 of them, you can go back to the main (matching game) and complete that game.

credits: mouse trails -- by mrbombmusic
****************************************************/

"use strict";

//Variables for images.
let titleImage; //start screen image variable
let simulationImage; //middle/game screen image variable
let deadImage; //end screen image variable
let wonImage;

let ornamentsImage; //
let hand; //

//Variable for the screen, the function is to switch between start, middle and end screens.
let state = `title`;

//Variable for ornaments/non-user controled.
let ornaments = {
  x: 0,
  y: 0,
  size: 50,
  speed: 2,
  score: 0,
};

//Variable for the ornaments/User-controlled mouse tail .
let mouse = [];
let a = 0;

//Variable for the font, Astron by Mason Mulcahy.
let astron;

//Loads the images and font for each element that requires an image or font.
function preload() {
  titleImage = loadImage(`assets/images/startpage_game2.jpg`);  //start screen background image
  simulationImage = loadImage(`assets/images/simulation _gradient_Image_game2.jpg`); //middle/during game background image
  deadImage = loadImage(`assets/images/deadstate_image .jpg`); //end/game over background image
  wonImage = loadImage(`assets/images/wonstate_image.jpg`);//won/game over background image


  ornamentsImage = loadImage(`assets/images/ornaments-ball.png`); //tornaments/non-user-controlled image
  hand = loadImage(`assets/images/hand.png`);   //ornaments/user-controlled image

  astron = loadFont(`assets/fonts/Astron.ttf`);   //Astron font for all the text.
}

//This sets the basic things that are needed for this game like canvas, ornaments's x and size and also noCursor throughout the whole program.
function setup() {
  createCanvas(windowWidth, windowHeight); //creates the canvas
  noCursor(); //no cursor at all
  ornaments.x = random(width); //randomizes where the circle comes from on the x axis.
  ornaments.size = random(40, 80); //randomizes the size of the circle.
}

//This function displays and creates the whole game.
function draw() {
  //if statement for the state variable. This changes the screens from start, middle or to end.
  if (state === `title`) {
    title();
  }else if (state ===`simulation`) {
    simulation();
  } else if (state === `won`) {
    won();
  } else if (state === `dead`) {
    dead();
  }
};

//This function is for the start screen/ intro screen.
function title() {
  background(titleImage); //background image
  reset(); //reset function when the ornaments lose the game they come back to this.
}

//This function runs and displays the whole games
function simulation() {
  background(simulationImage); //background image
  noStroke();

  //text and placement for the score numbers on the top right corner
  textSize(20);
  textFont(`astron`);
  fill(255);
  text(`Your score =`, 20, 63); //text with the x and y position
  text(ornaments.score, 213, 62); //score number with the x and y position

  //displays and shows that image of the ornaments.
  image(ornamentsImage, ornaments.x, ornaments.y, ornaments.size, ornaments.size);

  //makes the ornaments move on the canvas
  ornaments.y += ornaments.speed;

  //constraining it in the canvas
  ornaments.x = constrain(ornaments.x, 0, width -ornaments.size);

  //if statement of when the layer hits the bottom, the end screen appears (game over).
  if (ornaments.y > height) {
    state = `dead`; //end screen
  }

  //if statement for when the circle hits the bottom, a new random size, speed, and on different x axis, a new ornaments appears.
  if (ornaments.y > height) {
    ornaments.x = random(width); //random x-axis
    ornaments.speed = random(3, 7); // random speed
    ornaments.size = random(40, 70); // random size
    ornaments.y = 0; //the ornaments always appears on the 0 value of the y-axis.
  }

  //if statement for when the ornaments hand touches a ornaments.
  if (
    mouseX > ornaments.x - 40 &&
    mouseX < ornaments.x + 40 &&
    mouseY > ornaments.y - 40 &&
    mouseY < ornaments.y + 40
  ) {
    ornaments.y = 0;
    ornaments.x = random(width);
    ornaments.score = ornaments.score + 1; // the ornaments scores when the ornaments hand catches the ornaments.
    ornaments.speed = random(3, 12);
    ornaments.size = random(40, 80);
  }

  //this is for the ornaments hand/user-controlled.
  mouse.push([mouseX, mouseY]);
  for (let i = 0; i < mouse.length; i++) {
    noStroke();
    //displays the image, size of the ornaments hand
    image(hand, mouse[i][0], mouse[i][1], 110, 100, a);
    if (a > 100) {
      mouse.shift();
      a = 10;
    }
    a += 8;
  }

  //if the ornaments has 20 gift/score, the game is won with a gamewon music and no start song.
  if (ornaments.score === 30) {
    state = `won`;
  }
}

//This function displays and runs the end screen of this game
function dead() {
  background(deadImage); //background image
  displayText(`Score = ` + ornaments.score);
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
  background(wonImage);
  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  noStroke();
  fill(255);
  text(`Score = ` + ornaments.score, width / 1.23, height / 1.46);
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
  //if the ornaments is on the start screen and she/he presses the mouse, they will go to the play mode screen(simulation state).
  if (state === `title`) {
    state = `simulation`;
    //if the ornaments is on the end screen - game over, then she/he will go the state screen if the mouse is pressed.
  } else if (state === `dead`) {
    state = `title`;
  }
}

//this function resets the game.
function reset() {
  ornaments.state = 0;
  ornaments.speed = 1;
  ornaments.y = -2;
  ornaments.score = 0;
}

//Thank you and have fun playing this game! :):)
