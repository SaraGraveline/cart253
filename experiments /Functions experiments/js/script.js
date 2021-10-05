/**
Function Experiments
Sara Graveline

This is document to experiments with functions and learn about them.
*/

"use strict";


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  let hotCelsius = toCelsius(100);
  console.log(`100 degrees fahrenheit is ${hotCelsius} degrees Celsius.`);


  let coldCelsius = toCelsius(10);
  console.log(`10 degrees fahrenheit is ${coldCelsius} degrees Celsius.`);
}


/**
Description of draw()
*/
function draw() {
  background(0);

}

function toCelsius(fahrenheit) {
  let celsius = (fahrenheit -32) * 5/9;
  return celsius;
}
