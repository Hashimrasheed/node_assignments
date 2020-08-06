const prompt = require("prompt-sync")();
console.log("Enter your marks \n");
let written = parseInt(prompt("Enter your written mark :"));
let lab = parseInt(prompt("Enter you lab mark :"));
let assignment = parseInt(prompt("Enter your Assignment mark :"));
let overol_grade = (written*70 + lab * 20 + assignment*10)/100;
console.log("overol grade is :" + overol_grade);
