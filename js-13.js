const prompt = require("prompt-sync")();

let str = prompt("Enter a string :");
let arr = new Array();
arr = str.split('');
let flag =0;
console.log(arr);
for(let i = 0; i <arr.length/2;i++){
    if(arr[i] != arr[arr.length-1-i]){
        flag=1;
    }
}
if(flag ==0){
    console.log("it is a paliandrome");
}else{
    console.log("it is not a paliandrome");
}
