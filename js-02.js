const prompt = require("prompt-sync")();

console.log("Enter two numbers");
let number_1 = parseInt(prompt("first mumber :"));
let number_2 = parseFloat(prompt("second mumber :"));

let sum = number_1 + number_2;

console.log(`Sum is :${sum}`);