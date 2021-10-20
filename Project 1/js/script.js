/**
Project 1
Sara Graveline

This is a template. You must fill in the title,
author, and this description to match your project!
*/


"use strict";

//variable for the tail (user-control)
let badge = [];

//variable for the diamond
let diamond = {
  x: undefined,
  y: undefined,
  size: 50,
};


//variable for theif
let theif = []; // the theif circles variables
let	mainTurrent;
let posOfX = 3500; //postion of the x where they all need to go
let posOfY = 2000; //postion of the y where they all need to go
let theifAmount = 0; //the amount of the theif circle appares.
let theifSpeedMultiplier = 2; //the spawn/speed of the theif circle
let theifSizeMultiplier = 2; //size of the theif circle

//variable for the images
let policeBadge;
let diamondImg;
let thief;



//preload
//
//displays all the images
function preload() {
  policeBadge=loadImage('assets/images/police badge-02.png');
  diamondImg=loadImage('assets/images/diamond-03.png');
  //thiefImg=loadImage(`assets/images/thief-04.png`);
};


//setup
//
// Draws the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  mainTurrent = new turrent(300,300);
  noStroke();  //no stroke
  noCursor(); //no cursor
};



// draw
//
//Draws everything else.
function draw() {
  background(0); //black bg




//--------------- Displays the Diamond img ---------------
  //image of the diamond
  imageMode(CENTER);
  image(diamondImg, width/2, height/2, 2400, 1600);



//--------------- user-control - Police badge ---------------

  // Creates the other circles at the end of the tail.
  badge.push({x: mouseX, y: mouseY});

  // This constrains the tail from getting to long.
  if (badge.length > 10) {
    badge.shift();
  };

  // This draws the tail of more police badges.
  for(let i = 0; i < badge.length; i++) {
     let x = badge[i].x;
     let y = badge[i].y;

  // displays the policeBadge image.
    image(policeBadge, x, y, 404 + i , 340 + i);
  };

//---------------Thiefs - Non User-controled-----------

  //the amount, spawn and new theif circles code
  theifAmount += 1; //the amount of theif plus 1
  let spawnInterval = int(200 / theifSpeedMultiplier)
  //new theif circles if statement and their spawn
  if (theifAmount % spawnInterval == 0){
    let newTheif = new balloon(); //see function class below (by TANMAYA15 - editer p5js.org)
    theif.push(newTheif);
  };



//-------------------------------------------Theif circles----------------------------------------
for (var i = 0; i < theif.length; i++){
  theif[i].draw(); //see the function of draw below
  theif[i].new(); // see the new function below
  if (theif[i].outSide()){ //see the outSide function below
        theif.splice(i,1);
    };
};

  //speed and the size of theif circles
  theifSpeedMultiplier += 0.001;
    if (theifSizeMultiplier < 5){
      theifSizeMultiplier += 0.001;
    };

    //------------------------------------------HERO-AND-HERO-DED---------------------------------------a

	if (mainTurrent.hitScan()){
		gameOver();
	};
};

// the class function of the theif ballon (by TANMAYA15 - editer p5js.org)
class balloon{
	constructor(){
		this.side = int(random(4));
		switch (this.side)
		{
      //Case 0 has a x with 0 value and y with random height
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
      //Case 1 has a x with random width and y with 0 value
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
      //Case 2 has a x with width value and y with random height
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
      //Case 3 has a x random width and y with height value
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		};
    //the theif x and theif y is equall to the position of x and y (the variable listed above)
		this.theifX = posOfX;
		this.theifY = posOfY;
    //this theif dir create a vector with theif x and theif y - the this x and y which is listed in the class balloon.
		this.theifDir = createVector(this.theifX - this.x, this.theifY - this.y);
		this.theifDir.normalize();
    //this x and y speed is equal to the theif's dir with times the theif speed Multiplier
		this.xSpeed = this.theifDir.x*theifSpeedMultiplier;
		this.ySpeed = this.theifDir.y*theifSpeedMultiplier;
		this.r = 12*theifSizeMultiplier;
	};


//This is the function that displays the theif circles
	draw(){
		push();
		noStroke(); //no strokes
		fill(255, 0, 0); //red fill
		ellipse(this.x, this.y, this.r); //draws the ellipse
		pop();
	};

  // this is the function that updates the this.x and y in the class ballon to equal to its x and y speed.
	 new(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	};

//this function returns the circles with the this.x or this y
	outSide(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	};

  myX(){
		return this.x;
	}

	myY(){
		return this.y;
	}

	myR(){
		return this.r;
	}
};

class turrent{
	constructor(){
	}
	hitScan(){
		for (var i = 0; i < thief.length; i++){
			var collideOrNot = collideCircleCircle(posOfX, posOfY, 30, thief[i].myX(), thief[i].myY(), thief[i].myR())
			if (collideOrNot){
				return true;
			}
		}
		return false;
	}
};


function gameOver(){
	push()

	print("DED");
	noStroke();
	fill(20)
	rect(0,200,600,200)

	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("YOU DIED",300,300)

	pop();
	noLoop();
};
