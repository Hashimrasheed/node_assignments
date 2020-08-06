const prompt = require("prompt-sync")();

let limit = parseInt(prompt("Enter the size of array :"));
let array1 = new Array(2);
for (var i = 0; i < array1.length; i++) { 
    array1[i] = new Array(2);
}
console.log("Enter the values of array 1");
for (var i=0;i<limit; i++){
    for(var j=0;j<limit;j++){
        array1[i][j] = parseInt(prompt())
    }
}
let array2 = new Array(2);
for (var i = 0; i < array2.length; i++) { 
    array2[i] = new Array(2);
}
console.log("Enter the values of array 2");
for (var i=0;i<limit; i++){
    for(var j=0;j<limit;j++){
        array2[i][j] = parseInt(prompt())
    }
}

let sum = new Array(2);
for (var i = 0; i < sum.length; i++) { 
    sum[i] = new Array(2);
}
for (var i=0;i<limit; i++){
    for(var j=0;j<limit;j++){
        sum[i][j] = array1[i][j] + array2[i][j]
    }
}
console.log(sum);
