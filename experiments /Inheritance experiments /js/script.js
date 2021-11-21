/**
Inheritance
Sara Graveline

Experimenting with inheritance
*/

"use strict";
let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycle = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    cars.push(car);
  }

  for (let i = 0; i < numMotorcycle; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    motorcycles.push(motorcycle);
  }
}


function draw() {
  background(0);

  for(let i = 0; i < cars.length; i++) {
    let car = cars[i];
    car.move();
    car.wrap();
    car.display();
  }

  for(let i = 0; i < motorcycles.length; i++) {
    let motorcycle = motorcycles[i];
    motorcycle.move();
    motorcycle.wrap();
    motorcycle.display();
  }
}
