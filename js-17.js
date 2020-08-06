const calculator = require("./js-17-class")

const prompt = require("prompt-sync")();
console.log("1 for addition \n2 for subtration \n3 for multiplication \n4 for division");
let select = parseInt(prompt("Enter your choice "));

let num1 = parseInt(prompt("Enter first number :"));
let num2 = parseInt(prompt("Enter second number :"));
let calc = new calculator(num1,num2);
if (select == 1){
    console.log(`Sum is ${calc.addition()}`);
}else if(select  == 2){
    console.log(`Sum is ${calc.subtract()}`);
}else if(select == 3){
    console.log(`Sum is ${calc.multiply()}`);
}else if(select == 4){
    console.log(`Sum is ${calc.division()}`);
}else {
    console.log("Enter a valid number");
}



