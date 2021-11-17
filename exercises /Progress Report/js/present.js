class Present {

  constructor() {
    this.x = 0;
    this.y = 0;
  };
};

function displayPresent () {
  pop();
  fill(255, 0, 100);
  rect(present.x, present.y, size, size);
  push();
};
