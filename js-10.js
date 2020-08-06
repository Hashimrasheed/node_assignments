const prompt = require("prompt-sync")();

let size = parseInt(prompt("Enter the size of array :"));
console.log("Enter the values of array 1");

var arr1 = new Array();
var arr2 = new Array();
var temp = new Array();

for (let i=0; i<size; i++){
    arr1[i] = prompt()
}
console.log("Enter the second array");
for (let j=0 ; j<size; j++){
    arr2[j] = prompt();
}
temp = arr1;
arr1 = arr2;
arr2 = temp;
console.log("After swaping \narray 1");
console.log(arr1);
console.log("array 2");
console.log(arr2);