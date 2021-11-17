class Present {

  constructor() {
    this.x = 0;
    this.y = 0;
  };
};

function presentLocation() {
  //setup the random location of the present sqaure on the canvas on the grid where the player square travels.
  let x = floor(random(columns))*size;
  let y = floor(random(rows))*size;
  present = createVector(x, y);
  //present.position(x, y);
};

function displayPresent () {
  pop();
  fill(255, 0, 100);
  rect(present.x, present.y, size, size);
  push();
};
