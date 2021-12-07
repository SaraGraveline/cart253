//this is the obstacle class which is used in the big class as an extend. This makes the obstacle moves and wrap around.
//The undefined are defined in the big obstacle and also the display whic is an image..

class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = 0;
    this.vy = 0;
    this.speed = undefined;
  };

  //moves the obstacle
  move() {
    this.x += this.vx;
    this.y += this.vy;
  };

  //wraps it around and back and fourth.
  wrap() {
    if (this.x > width) {
      this.x -= width;
    } else if (this.x < 0) {
      this.x += width;
    };
  };

  //check the display part in the big.js
  display() {}
};
