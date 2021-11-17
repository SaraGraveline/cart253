class Player {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.xdir = 0;
    this.ydir = 0;
    this.total = 0;
    this.bag = [];
  };

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  };

  eat(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d<1){
      this.total++;
      return true;
    } else {
      return false;
    };
  };

  move() {
  player.x += this.xdir*size;
  player.y += this.ydir*size;

  //constraining it in the canvas
  player.x = constrain(player.x, 0, width-size);
  player.y = constrain(player.y, 0, height-size);
};

display() {
  push();
  fill(255);
  rect(player.x, player.y, size, size);
  pop();
};
}
