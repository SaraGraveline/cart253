/**
E6 - Make Some Noise
Sara Graveline

This exercise is to explore sounds in p5.js. Through this exercise, I created a sound cursor which I use in my final project.
Because my final project theme is christmas, I used the song silent night. As the song starts, the circles starts to bounce with the rhythm of the song.
To create more christmas environment, I used random function on the stroke of these circles.
This cursor will be used on a landing page and the ending page of the game where the user will have to click on different buttons.

Credits: Sound visualization by Lllucas
**/

let silentNight; //the song
let bounce = []; //rhythm to the song
let base; //for the get level p5.js

/**
This function loads the silent night mp3 song from the sound assets folder.
*/
//function preload() {
//  silentNight = loadSound("assets/sounds/SILENT_NIGHT.mp3");
//};

/**
This function setup the canvas to windowWidth and windowHeight.
It also plays the song as the page load and plus the base varible.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  silentNight = loadSound("assets/sounds/SILENT-NIGHT.mp3", loaded);
  base = new p5.Amplitude(); //from p5.js
};

function loaded() {
  silentNight.play();
}
/**
This function draws random strokes colors for the circles, bounces all the circles, and the movement of the circle with mouse.
*/
function draw() {
  background(0); //black color background

  let vol = base.getLevel();
  bounce.push(vol);

  colorMode(HSB); //sets the color mode to HSB
  stroke(random(10, 240), random(10, 240), random(10, 240)); //random color strokes for all of the circles.

  noFill(); //no fill
  noCursor(); // no cursor on the canvas

  translate(mouseX, mouseY); //able to move the circle around

  //controls the rhythm of the circles.
  for (i = 0; i < 180; i++) {
    let r = map(bounce[i], 0, 2, 30, 1500);
    let x = r * cos(i);
    let y = r * sin(i);

    ellipse(x, y, 10, 10); //draws the circle
  };

  // makes the circle move back and fourth like they are bouncing.
  if (bounce.length > 180) {
    bounce.splice(0, 1);
  };
};
