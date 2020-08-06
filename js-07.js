const prompt = require("prompt-sync")();

let num = parseInt(prompt("emter a number :"));
for(let i=1;i<=10;i++) {
    console.log(i + "x" + num + "=" + i*num);
}