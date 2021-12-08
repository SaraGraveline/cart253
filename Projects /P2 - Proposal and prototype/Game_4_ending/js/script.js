/**
Project 2: Game 4_ ending
Sara Graveline

This game is same as the beginning but only the display test is changed to words of goodbye. I wanted to do a fully own game with matching color but I ran out of time and this is what I can do.
We learned so much this semester so its hard to grab to everything when you are slow learner.

This again provide as alone space for the user to take their quick break by watch the circles dance to the slient night.

Merry Christmas and Happy New Year!!.

Credits: Sound visualization by Lllucas = https://editor.p5js.org/Lllucas/sketches/dDxXHIbtD
        CreateA = https://p5js.org/reference/#/p5/createA
*/

let silentNight; //the song
let bounce = []; //rhythm to the song
let base; //for the get level p5.js

/**
This function loads the silent night mp3 song from the sound assets folder.
*/
function preload() {
  silentNight = loadSound("assets/sounds/SILENT-NIGHT.mp3");
}

/**
This function setup the canvas to windowWidth and windowHeight.
With a createA I linked my games togther. SO this CreateA links is for game 1-collect gifts.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  base = new p5.Amplitude(); //from p5.js
}


//This makes the song play when any key is pressed.
function keyPressed() {
  silentNight.play();
}

/**
This function draws random strokes colors for the circles, bounces all the circles, and the movement of the circle with mouse.
It also displays the text of instruction of what to do with displayText function.
*/
function draw() {
  background(0);

  //the instruction of what to do and what this is. This calls upon display text function.
  displayText(`I hope you enjoyed playing these games and
are motivited to do something fun during Christmas.
Thank you behalf Jungkook and Me!
Merry Christmas and Happy New Year!!

Again, if you want to relax, just press any key
and get hypnotized to feel better.`);

  let vol = base.getLevel();
  bounce.push(vol);

  //sets the color mode to HSB and random color are sit on all of the strokes of circles.
  colorMode(HSB);
  stroke(random(10, 240), random(10, 240), random(10, 240));

  noFill(); //no fill
  noCursor(); // no cursor on the canvas

  //able to move the circle around
  translate(mouseX, mouseY);

  //controls the rhythm of the circles.
  for (i = 0; i < 180; i++) {
    let r = map(bounce[i], 0, 2, 30, 1500);
    let x = r * cos(i);
    let y = r * sin(i);

    //draws the circle
    ellipse(x, y, 10, 10);
  }

  // makes the circle move back and fourth like they are bouncing.
  if (bounce.length > 180) {
    bounce.splice(0, 1);
  }
}

//function for the instruction text
function displayText(string) {
  push();
  textAlign(LEFT);
  textSize(20);
  noStroke();
  fill(80);
  text(string, width / 50, height / 20); //displays it on the left top.
  pop();
};
