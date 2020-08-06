const prompt = require("prompt-sync")();

let limit = parseInt(prompt("Enter a limit :"));
let num="\n";
for(let i=1;i<=limit;i++){
    for (let j=1 ;j<=i;j++){
        num += j;
    }
    num += "\n"
}
console.log(num);