const prompt = require("prompt-sync")();

let limit = parseInt(prompt("Enter a limit :"));
let sum = 0;
for(let i = 1; i<=limit;i++){
    if (i%2 == 1) {
        sum =sum + i;
    }
}
console.log(`result is ${sum}`);