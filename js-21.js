const prompt = require("prompt-sync")();

let size = parseInt(prompt("Enter the size :"))
let arr = new Array();
let multipliedArray = new Array();
console.log("Enter the values of array :");
for(let i = 0;i <= size-1;i++){
    arr[i] = parseInt(prompt());
}
for(let j=0; j<size-1;j++){
    multipliedArray[j] = arr[j]*arr[j+1]
}
console.log(multipliedArray);