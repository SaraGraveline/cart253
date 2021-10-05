/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//Function for the non-user circle.
let nonUser = {
  x: 500,
  y: 350,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

//function for the UserControl circle.
 let userControl = {
   x: 900,
   y: 400,
   size: 80,
   vx: 0,
   vy: 0,
   speed: 5
 };

 //creating the variable for the simualtion and these three line code is taken from codeacademy.
 let t;
 let x; // X position
 let y; // Y position

 //variables for bounce balls
 let bounce = {
   x: 0,
   y: 0,
   size: 50,
   t: 0
 };


//setup
//
//draws the canvas by 1000x700.
function setup() {
  //creates the canvas
  createCanvas(1000, 700);
};


//Draw
//
//draws, displays, moves, changes, all of the circles.
function draw() {
  //light blue background color.
  background(220,245,255);


  //Non-user/medium purple circle's functions
  move(); //this calls on function `move` that moves the purple circle.
  displayNonUser(); //this calls on the function `displayNonUser` which draws the purple circle.

  //User-control/yellow circle's functions.
  arrowControl(); //this calls on the function `arrowControl` which draws and allows the user-control circle move with arrows.
  moveUserControl(); //this calls on function `moveUserControl` that moves the yellow circle.
  displayUserControl (); //this calls on the function `displayUserControl` which draws the yellow circle.

  //Bounce balls functions.
  catchingYellowCircle (); //this calls on the function `catchingYellowCircle` which stops the game if the bounce ball touches the yellow circle/userControl circle.
  displayBounceBalls (); //this calls on function `displayBounceBalls` which draws the bounce balls and creates random colors.
  moveBounceballs ();  //this calls on function `moveBounceballs` that bounces the balls.


  //changes the non-user circle's position randomly on the canvas.
  let change = random(); //random number between 0 and 1.

  //this number changes the direction of the circle 5% of the time.
  if(change < 0.05) {
    chaotic (); //this call on the function `chaotic` which makes the non-user circle to be chaotic and change its position randomly.
  }


};

////////////////////////////////////////////////////////////////////////
/////////////////NonUser circle / medium purple circle//////////////////
////////////////////////////////////////////////////////////////////////

  //This function moves the nonUser circle on x and y axis.
  function move () {
    nonUser.x += nonUser.vx;
    nonUser.y += nonUser.vy;
  };


  //This function display/draws the circle on the canvas and postion it on 500 x-axis and 350 y-axis.
  function displayNonUser () {
    noStroke();
    fill(147,112,219) //medium purple color
    ellipse(nonUser.x, nonUser.y, nonUser.size);
  };


  //This function randomly the direction the circle will move on the x and y axis. It randomize the velocites.
  function chaotic () {
    nonUser.vx = random (-nonUser.speed, nonUser.speed);
    nonUser.vy = random (-nonUser.speed, nonUser.speed);
  };


////////////////////////////////////////////////////////////////////////
/////////////////UserControl circle / yellow circle/////////////////////
////////////////////////////////////////////////////////////////////////

  //This function allows the user to control the yellow circle with the arrows key on the keyboard.
  function arrowControl () {
    //if the left_arrow is pressed, the yellow circle will move left on x-axis.
    if (keyIsDown (LEFT_ARROW)) {
      userControl.vx = -userControl.speed;
    }
    //but if the right_arrow is pressed, the yellow circle will move right on x-axis.
    else if (keyIsDown(RIGHT_ARROW)) {
      userControl.vx = userControl.speed;
    }
    //eitherwise (if right or left arrow is not pressed) the yellow circle will not move on the x-axis.
    else {
      userControl.vx = 0;
    };

    //if the up_arrow is pressed, then the yellow circle will move up on th y-axis.
    if (keyIsDown(UP_ARROW)) {
      userControl.vy = -userControl.speed;
    }
    //but if the down_arrow is pressed, then the yellow circle will move down on the y-axis.
    else if (keyIsDown(DOWN_ARROW)) {
      userControl.vy = userControl.speed;
    }
    //eitherwise (if up or down arrows are not pressed), the yellow circle will not move on the y-axis.
    else {
      userControl.vy = 0;
    }
  };

  //This function moves the User-control circle on x and y axis.
  function moveUserControl () {
    userControl.x += userControl.vx;
    userControl.y += userControl.vy;
  };

  //This function display/draws the userControl/yellow circle on the canvas and postion it on 200 x-axis and 200 y-axis.
  function displayUserControl () {
    fill(255,255,51); //yellow color
    ellipse(userControl.x, userControl.y, userControl.size); //draws the yellow circle
  };


////////////////////////////////////////////////////////////////////////
/////////////////////////////Bouncing balls/////////////////////////////
////////////////////////////////////////////////////////////////////////

    //this function checks if the bounce balls touches the yellow circle or not. If they do then the game stops.
    function catchingYellowCircle () {
      //Checks for catching bounce balls with variable.
      let d = dist(userControl.x, userControl.y, bounce.x, bounce.y);

      //checks for catching bounce balls with if statement and also code line where the simulation stops if both circles touch each other.
      if (d < bounce.size/2 + userControl.size/2) {
        noLoop();
      };
    }

    //This function moves the bouncing balls randomly on the x and y axis.
    function moveBounceballs () {
      bounce.x = random(0, width);
      bounce.y = random(0, height);
    };

    //This function display/draws the userControl/yellow circle on the canvas and postion it on 200 x-axis and 200 y-axis.
    function displayBounceBalls () {
      fill(255,79,100); //setting the fill to be a random color.
      noStroke(); //nostrokes
      ellipse(bounce.x, bounce.y, 50, 50); //draws the yellow circle
    };
