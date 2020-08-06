const prompt = require("prompt-sync")();

let mark = parseFloat(prompt("Enter your mark :"));
if(mark>100) {
    console.log("Enter a valid number");
}else if (mark >= 90) {
    console.log("A grade");
}else if(mark>=80) {
    console.log("B grade");
}else if(mark >= 70){
    console.log("C grade");
}else if(mark >= 60) {
    console.log("D grade");
}else if(mark >= 50) {
    console.log("E grade");
}else {
    console.log("Failed");
}