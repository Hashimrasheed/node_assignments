const prompt = require("prompt-sync")();
let limit = parseInt(prompt("Enter a limit :"))
let pattern = "";
let count=1;
for (let i = 1; i <= limit; i++){
    for (let j=1; j<=i ;j++){
        pattern +=` ${count}`;
        count ++;
    }
    pattern +="\n"
}

console.log(pattern);