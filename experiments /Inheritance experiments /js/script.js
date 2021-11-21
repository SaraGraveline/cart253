/**
Inheritance
Sara Graveline

Experimenting with inheritance
*/

"use strict";
let vehicles = [];
let numCars = 10;
let numMotorcycle = 10;
let numSportCar = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  for (let i = 0; i < numMotorcycle; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  for (let i = 0; i < numSportCar; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportcar = new SportCar(x, y);
    vehicles.push(sportcar);
  }
}

function draw() {
  background(0);

  for(let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}
