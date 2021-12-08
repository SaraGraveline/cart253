/**
Help Jungkook with Christmas - Project 2
Sara Graveline

This is the main script.js where I will bring all of my different games together to make it a one game. This is where I wil do my final project 2.
But for now, this documnet has the details of the main game called the matching game. And the other links are to the other games which will be added to this document later one.

The main theme of this game is to help Jungkook with christmax by playing only the main game if player doesn't flip the wrong cards 7 times.
Otherwise, the player will have to complete more games depending on how many time he/she gets 7 wrong cards continuously.

credits - p5js.org - reference, Fill rect with image by jeremydouglass, codepen.io memory by rustyrobison, khanacademy.org by pamela
*/

"use strict"
//rows and columns of cards
let snow; //bg image

let rows = 4; //4 rows of cards
let cols = 5; //8 columns of cards

let number = 0;
let cardSize = 20; // size of the card
let cards = []; // look at the function below

//cards numbers
let faces = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

let click = 0; //shows the first card when clicked on it.
let pair = 0; // if the 2 cards are the same colors or not.

let one;
let two;

let button;


//loads the background Image
//
function preload() {
  snow = loadImage(`assets/images/snowman.jpg`);
};

//creates canvas, color mode, shuffles cards, card array.
//
function setup() {
  createCanvas(windowWidth, windowHeight); //displays canvas
  colorMode(HSL); //the colors mode is HSL

  shuffle(faces, true); //shuffles are colors

  //creating the array of cards on x and y axis.
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let cardX = i * (190 + cardSize) + 300; //the spacing between the cols and where they start on the x-axis.
      let cardY = j * (190 + cardSize) + 30; //the spacing between the rows and where they start on the y-axis.
      cards.push(new Card(cardX, cardY, cardSize, faces[number], true));
      number++;
    };
  };
};

//shows background image, and cards.
//
function draw() {
  background(snow); //background image

//link for the next game//
  button = createButton('You do not have to finish this game now. Click here to see the ending of this project.');
  button.position(width/1.4, height/1.04)
  button.mousePressed(startGame);


  //drawing the cards with the function display
  for (let i = 0; i < cards.length; i++) {
    cards[i].display();
  };
};

function startGame() {
  location = `https://saragraveline.github.io/cart253/Projects%20/P2%20-%20Proposal%20and%20prototype/Game_4_ending`;
};


function Card (x, y, size, faces, match) {
  this.x = x;
  this.y = y;
  this.size = 200;
  this.faces = faces;
  this.match = match;
  this.front = color(faces * 22, 70, 70);
  this.backSide = (30);
  this.frontSide = this.backSide;


  //this displays the card fill, shape and image, fill.
  this.display = function() {
    if (this.match) {
      fill(this.frontSide);
      rect(this.x, this.y, this.size, this.size, 30);
    }
  }

  this.clicked = function() {
    if (this.match) {
      if (mouseX > this.x && mouseX < this.x + this.size && mouseY > this.y && mouseY < this.y + this.size) {
        this.frontSide = this.front;

        if (click == 0) {
          one = this.faces;
        } else if (click == 1) {
          two = this.faces;
        }
        click++;
      }
    }
  }
};

// Allows to flips the cards with mouse click.
//
function mouseClicked () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].clicked();
  }
  if (click == 2) {
    if (one == two) {
      pair++;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].faces == one) {
          cards[i].match = false;
        }
      }
    } else {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].faces == one || cards[i].faces == two){
          cards[i].frontSide = cards[i].backSide;
        }
      }
    }
    click = 0;
  }
};

function startGame() {
  location = `https://saragraveline.github.io/cart253/Projects%20/P2%20-%20Proposal%20and%20prototype/Game_4_ending`;
}

//thank you
