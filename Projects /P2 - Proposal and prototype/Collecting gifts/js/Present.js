class Present {

  constructor() {
    this.x = 0;
    this.y = 0;
  };
};

//
//for some reason the presentlocation and display present doesn't work with its in the present class. So I used function for it.
//

function presentLocation() {
  //setup the random location of the present sqaure on the canvas on the grid where the player square travels.

  let x = floor(random(gridColumns))*size;
  let y = floor(random(gridRows))*size;
  present = createVector(x, y);
};

function displayPresent() {
  push();
  image(presentGif, present.x, present.y, size, size)
  pop();
};
