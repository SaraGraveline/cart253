/**
Activity 04: Dodging COVID-19
Sara Graveline

The idea for this activity is to make a simulation of COVID-19. The red circle represents covid-19.
The goal of this simulation is to let the user control their circle with the position of the mouse.
When the Covid-19/red circle comes in contact with the user circle, the simulation stops.

Plan:
  * Create covid-19 circle and make it move
  * Make the covid-19 return back with if statment
  * Create the user circle
  * Check the circle overlap
  * Hide the cursor by using noCursor
*/

"use strict";

//creating the covid-19 variable with position and velocity properties and fill as javascript object.
let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    b: 0,
    g: 0
  }
};

//Creates the user variable with its size and fill properties.
let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255
};


/** setup()
Creating the canvas and getting things ready for the covid 19 circle to start drawing and moving.
*/
function setup() {

  //creating the canvas
  createCanvas (windowWidth, windowHeight);

  //setting the covid19 object to random number on y axis.
  covid19.y = random(0, height);

  //setting the covid19 vx to match the speed property so it moves to the right.
  covid19.vx = covid19.speed;

  //takes out the mouse cursor
  noCursor();
};


/** draw()
Creates the random static background for visual flourish, creates the movement and draws covid19 and user circle.
*/
function draw() {
  //makes the background color
  background(0);

  //draws the static background with loop and x and y variable.
  for (let i = 0; i < 1000; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x,y);
  }

  //Updating the covid 19 to the standard movement code.
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  //writes the if statement so the covid 19 circle go back to the left when it leaves the canvas.
  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  };

  //Sets the users mouse position and movenment.
  user.x = mouseX;
  user.y = mouseY;

  //Checks for catching covid-19 with variable.
  let d = dist(user.x, user.y, covid19.x, covid19.y);

  //checks for cataching covid-19 with if statement and also code line where the simulation stops if both circles touch each other.
  if (d < covid19.size/2 + user.size/2) {
    noLoop();
  }

  //Sets the fill property on covid 19 circle.
  fill(covid19.fill.r, covid19.fill.b, covid19.fill.g);

  //Sets no stroke on the covid 19
  noStroke();

  //Draws the covid 19 circle with the covid19 variable.
  ellipse(covid19.x, covid19.y, covid19.size);

  //Draws the covid 19 circle with the covid19 variable.
  ellipse(covid19.x, covid19.y, covid19.size);

  //Draws the user circle by using the user variable.
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
}
