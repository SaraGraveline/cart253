
let bgStartScreen;
let bgPlayMode;
let bgEndScreen;

let thief;

let badge;

let player = {
  x: 0,
  y: 0,
  size: 50,
  speed: 2,
  score: 0,
  r: 0
};


var screen = 0;


let trail =[];
let a =0;

function preload () {
  bgStartScreen = loadImage(`assets/images/startscreen.jpg`);
  bgPlayMode = loadImage(`assets/images/playmode.jpg`);
  bgEndScreen = loadImage(`assets/images/endscreen-image.jpg`);

  thief = loadImage(`assets/images/thief1.png`);
  badge = loadImage(`assets/images/police badge-02.png`);


}


function setup() {
  createCanvas(windowWidth, windowHeight); //creates the canvas
  player.x = random(width); //randomlizes where the circle comes from on the x axis.
  player.size = random(40, 80); //randomlizes the size of the circle.
  noCursor();
};


function draw() {
  if(screen == 0) {
    startScreen()
  }else if (screen == 1) {
    playMode()
  }else if (screen == 2) {
    endScreen()
  };
};

function startScreen(){
  background(bgStartScreen); //black background
  noStroke();
  fill(255, 0, 150)
  textAlign(CENTER);
  textSize(30);
  textFont(`Astron`);
  text('HELLO, WELCOME AND PLEASE ENJOY THIS GAME', width/2, height/2)
  text(`To start please click anywhere`, width/2, height/2+50);
  reset();
};

function playMode(){
  background(bgPlayMode); //black background
  noStroke();

  image(thief, player.x, player.y, player.size, player.size);
  //fill(player.y/3,0,200); //blue fill
  //ellipse(player.x, player.y, player.size, player.size); //displays the ellipse.

  player.y += player.speed; //creates the circles movement

  if (player.y>height){
    screen = 2
  };


  //if statement for when the circle hits the bottom, a new random size, speed, and different x axis, a new circle appares.
  if (player.y > height){
    player.x = random(width);
    player.speed = random(3, 7);
    player.size = random(40, 80);
    player.y = 0;
  };

  if (mouseX > player.x-40 && mouseX < player.x+40 && mouseY > player.y - 40 && mouseY < player.y + 40) {
    player.y = 0;
    player.x = random(width);
    player.score = player.score + 1;
    player.speed = random(3,12);
    player.size = random (40, 80);
  };

  trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    image(badge, trail[i][0], trail[i][1], 110, 100, a);
    //fill(255, 20, 189, a);
    //ellipse(trail[i][0], trail[i][1], 50);
      if(a > 100) {
        trail.shift();
        a = 10;
      }
      a += 8;
    }
  //text and placement for the score
  textSize(20);
  textFont(`Astron`);
  text(`Your score =`, 110, 60);
  text(player.score, 213, 62);


  //if statement if the player reaches 100 score, they get a motivated text to get going.
  if (player.score === 5) {
    player.x = width/2-70;
    player.y = height/2-140;
    player.speed = 0;
    player.size = 100;
    textSize(20);
    fill(255);
    textFont(`Astron`);
    text(`WOOHOO!! Can you score 500, Now?`, width/2, height/2)
  };
};

function endScreen(){
  background(bgEndScreen);
  textAlign(CENTER);
  textFont(`Astron`);
  textSize(25);
  text(`OOPS! GAME OVER`, width/2, height/2-20);
  text(`SCORE = ` +player.score, width/2, height/2+20);
  text(`CLICK TO PLAY AGAIN`, width/2, height/2+60);
};

function mousePressed (){
  if(screen == 0){
    screen = 1
  } else if(screen == 2){
    screen = 0
  };
};

function reset(){
  player.score = 0;
  player.speed = 1;
  player.y = -2;
};
