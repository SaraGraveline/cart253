//This is the player's class or the gift train. In here is the checkhit function of when the train touches the red brick will the dead state is called upon.
//With the handleInput, the player can move around when the arrow keys are pressed.
//With eat statement, the player is able to collect the presents.
class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.vx = 0;
    this.vy = 0;
    this.alive = true;
    this.score = 0;
  };

  //checks if the train touches the red brick wall.
  checkHit(obstacle) {
    if (
      this.x + size / 2 > obstacle.x - obstacle.width / 2 &&
      this.x - size / 2 < obstacle.x + obstacle.width / 2 &&
      this.y + size / 2 > obstacle.y - obstacle.height / 2 &&
      this.y - size / 2 < obstacle.y + obstacle.height / 2
    ) {
      // If yes, then game over.
      this.alive = false;
    };
  };

  //makes it possible to move around with arrow keys.
  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    };
  };

  //makes the train collect the gift.
  eat(present) {
    let d = dist(this.x, this.y, present.x, present.y);
    if (d < 1) {
      this.total++;
      player.score = player.score + 1;
      return true;
    } else {
      return false;
    };
  };

  //moves the on x and y
  move() {
    player.x += this.vx * size;
    player.y += this.vy * size;

    //constraining it in the canvas
    player.x = constrain(player.x, 0, width - size);
    player.y = constrain(player.y, 0, height - size);
  };

  //displays the player on canvas with a img.
  display() {
    push();
    fill(0);
    image(playerImage, player.x, player.y, size, size);
    pop();
  };
};
