const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number :"));
flag = 0;
for(let i = 2; i < num;i++){
    if (num % i == 0){
        flag=1;
    }
}
if(flag == 0){
    console.log("Entered number is prime number");
}else {
    console.log("Enterd number is not prime number");
}