const prompt = require ("prompt-sync")();

let mark = parseInt(prompt("Enter your mark :"));
 if(mark >= 50){
     console.log("Passed");
 }else {
     console.log("failed");
 }