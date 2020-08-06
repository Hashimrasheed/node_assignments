const prompt = require("prompt-sync")();

let arr = new Array();
let num = 0;
let limit = parseInt(prompt("Enter the size of array"));
for(let j=0 ; j<limit;j++){
    arr[j] = parseInt(prompt())
}
for(let i = 0; i<limit; i++){
    if (arr[i]%2 == 0){
        num ++;
    }
}
console.log(num);