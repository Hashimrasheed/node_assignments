const prompt = require("prompt-sync")();

let p = parseInt(prompt("Principal amound :"));
let r = parseFloat(prompt("Interest rate :"));
let n = parseFloat(prompt("Number of years :"));

let si = (p*r*n)/100

console.log(`Simple Interest = ${si}`);