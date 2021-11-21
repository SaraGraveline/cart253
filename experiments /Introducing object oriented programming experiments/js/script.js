/**
Object oriented programming experiments
Sara Graveline

Learning about object oriented programming and experimenting with it.
*/

"use strict";

let garden = {
  flowers: [], //array
  numFlowers: 20,

  bees: [],

  numBees: 7,
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < garden.numFlowers; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    };
    let flower = new Flower(x, y, size, stemLength, petalColor);
    garden.flowers.push(flower);
  }

  for (let i = 0; i < garden.numBees; i++) {
    let bee = new Bee(random(0, width), random(0, height));
    garden.bees.push(bee);
  }
};


function draw() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  for(let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    if (flower.alive) {
      flower.shrink();
      flower.display();
    }
  }

  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    if(bee.alive) {
      bee.shrink();
      bee.move();
      bee.display();

      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        if (flower.alive) {
          bee.tryToPollinate(flower);
        }
      }
    }
  }
};
