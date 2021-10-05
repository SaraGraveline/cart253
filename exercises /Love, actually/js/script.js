/**
Exercise: Love, actually
Sara Graveline

Goal: Don't get caught by negativity.
This project is mostly based on functions and how to use them. The main goal of this game is to `not get caught be the negativity` which is around us all the time.
The user have to try to get their way to the positivity by using the arrow keys and while avoiding all the negativity on their path.
The negativity are the bounce pink balls.
The positivity is the purple ball which moves very randomly and is chaotic in a way.
The user-control circle is the yellow circle which moves with the arrow keys on the keyword.
To start the game the user has to press on the mouse to move to the simulation state.
If the user-control circle touches the pink circles, the game ends and the following message, `Oops, you failed :(.` And the user has to reload the page to start again.
However, if the user successfully find its way and touches the purple circle, the game ends with this message, `Hooray!!! you won`.
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

 //variables for bounce balls
 let bounce = {
   x: 50,
   y: 50,
   size: 50,
 };

let state = `title`; //it is title, simulation, ending with winning, or ending with losing.

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


  //if statement for the title, simulation, failed, and won.
  if (state === `title`) {
    //for the title: Don't get caught by negativity! Try to catch the purple circle with the arrow keys and avoid the pink circles. Press your mouse to get started.
    title();
  }
  else if (state === `simulation`) {
    //for the simulation state
    simulation();
  }
  else if (state === `failed`){
    //ending 1: if the pink circles touches the yellow circles, the user loses.
    failed();
  }
  else if (state === `won`) {
    //ending 2: if the yellow circle touches the purple circle, the user wins.
    won();
  };
};

//title function right before the user presses the thier mouse.
function title() {
  push();
  textSize(40);
  fill(150,150,255);
  textAlign(CENTER, CENTER);
  text(`     Don't get caught by negativity!
      Try to catch the purple circle with the
      arrow keys and avoid the pink circles.
      Press your mouse to get started.`, width/2, height/2);
  pop();
};

//simulation function with all the other functions.
function simulation() {
  move();
  displayNonUser();
  arrowControl();
  moveUserControl();
  displayUserControl();
  catchingPurpleCircle();
  catchingYellowCircle();
  displayBounceBalls();
  moveBounceballs();
};

//ending 1 where the user loses because they touched the pink circles.
function failed() {
  push();
  textSize(40);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`Oops, you failed :(`, width/2, height/2);
  pop();
};

//ending 2 where the user wins the game and touches the purple circle.
function won() {
  push();
  textSize(40);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`Hooray!!! you won :)`, width/2, height/2);
  pop();
};

//Starts the game. This leads to the simulation when you press the mouse.
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
};

/////////////////NonUser circle / medium purple circle//////////////////

  //This function moves the nonUser circle on x and y axis.
  function move () {
    nonUser.x += nonUser.vx; //x-axis
    nonUser.y += nonUser.vy; //y-axis
  };


  //This function display/draws the circle on the canvas and postion it on 500 x-axis and 350 y-axis.
  function displayNonUser () {
    noStroke(); //no strokes
    fill(147,112,219) //medium purple color
    ellipse(nonUser.x, nonUser.y, nonUser.size);
  };


  //This function randomly the direction the circle will move on the x and y axis. It randomize the velocites.
  function chaotic () {
    nonUser.vx = random (-nonUser.speed, nonUser.speed);
    nonUser.vy = random (-nonUser.speed, nonUser.speed);
  };


/////////////////UserControl circle / yellow circle/////////////////////


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


  //this function checks if the yellow circle touches the purple circle or not. If they do then the game stops.
  function catchingPurpleCircle () {
    //Checks for catching yellow circlelce with variable.
    let d = dist(nonUser.x, nonUser.y, userControl.x, userControl.y);

    //checks for catching yellow circle with if statement and also code line where the simulation stops if both circles touch each other.
    if (d < userControl.size/2 + nonUser.size/2) {
      state = `won`;
    };
  };


//////////////////////Bouncing balls/ pink circles /////////////////////


  //this function checks if the bounce balls touches the yellow circle or not. If they do then the game stops.
  function catchingYellowCircle () {
    //Checks for catching bounce balls with variable.
    let d = dist(userControl.x, userControl.y, bounce.x, bounce.y);

    //checks for catching bounce balls with if statement and also code line where the simulation stops if both circles touch each other.
    if (d < bounce.size/2 + userControl.size/2) {
      state = `failed`;
    };
  };

  //This function moves the bouncing balls randomly on the x and y axis.
  function moveBounceballs () {
    bounce.x = random(0, width);
    bounce.y = random(0, height);
  };

  //This function display/draws the userControl/yellow circle on the canvas and postion it on 200 x-axis and 200 y-axis.
  function displayBounceBalls () {
    fill(255,79,100); //setting the fill to be a pink color.
    noStroke(); //nostrokes
    ellipse(bounce.x, bounce.y, 50, 50); //draws the yellow circle
  };



  //Thank you so much and be happy!! :)))
