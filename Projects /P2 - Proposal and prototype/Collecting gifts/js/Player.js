class Player {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.vx = 0;
    this.vy = 0;
    this.alive = true;

  };

  checkHit(obstacle) {
    if (this.x + size / 2 > obstacle.x - obstacle.width / 2 &&
       this.x - size / 2 < obstacle.x + obstacle.width / 2 &&
       this.y + size / 2 > obstacle.y - obstacle.height / 2 &&
       this.y - size / 2 < obstacle.y + obstacle.height / 2) {
       // They overlap, so change the smaller shape's color
       this.alive = false;
     };
    /*
    if (this.x > obstacle.x - obstacle.width/2 &&
      this.x < obstacle.x + obstacle.width/2 &&
      this.y > obstacle.y - obstacle.height/2 &&
      this.y < obstacle.y + obstacle.height/2) {
      this.alive = false;
    }*/
  };

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  };

  eat(present) {
    let d = dist(this.x, this.y, present.x, present.y);
    if (d<1){
      this.total++;
      return true;
    } else {
      return false;
    };
  };

  move() {
    player.x += this.vx*size;
    player.y += this.vy*size;

    //constraining it in the canvas
    player.x = constrain(player.x, 0, width-size);
    player.y = constrain(player.y, 0, height-size);

};

  display() {
    push();
    image(playerImage, player.x, player.y, size, size)
    //rect(player.x, player.y, size, size);
    pop();
  };
}
