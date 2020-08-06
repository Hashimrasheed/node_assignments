const prompt = require("prompt-sync")();

let limit = parseInt(prompt("Enter the size of array"));
console.log("Enter the values of array");
let arr = new Array();
let temp = new Array();
for(let j=0 ; j<limit;j++){
    arr[j] = parseInt(prompt())
}
for(let i = 0; i <limit;i++){
    temp[limit-1-i] =arr[i]
}
console.log(temp);

