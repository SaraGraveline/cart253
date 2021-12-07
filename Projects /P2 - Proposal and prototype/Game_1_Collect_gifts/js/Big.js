//This is the big class which extends to obstacles class. This is useful when you have any obstacles. I wanted to add more but I ran oot time.
//this displays the red brick wall.

class Big extends Obstacle {
  constructor(x, y) {
    super(x, y); //calling the obstacle class.
    this.width = 80;
    this.height = 20;
    this.speed = 30;
  };

  display() {
    super.display(); //calling the obstacle class.

    push();
    rectMode(CENTER);
    //shows the image of the red brick wall.
    image(obstacleImage, this.x, this.y, this.width, this.height);
    pop();
  };
};
