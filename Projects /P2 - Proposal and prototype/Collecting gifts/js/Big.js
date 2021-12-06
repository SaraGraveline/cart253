class Big extends Obstacle {
  constructor(x,y) {
    super(x,y);
    this.width = 80;
    this.height = 20;
    this.speed = 30;
  }

  display() {
    super.display();

    push();
    rectMode(CENTER);
    fill(200);
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
