const prompt = require("prompt-sync")();

let amound = parseInt(prompt("Enter the anual income :"));
var tax=0;
if (amound >= 1000000) {
    tax = (amound*30/100);
}else if (amound >= 500000){
    tax = (amound*20/100);
}else if (amound >= 250000){
    tax = (amound*5/100);
}else {
    tax = 0;
}
console.log("Income tax amount :" + tax);
