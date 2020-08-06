const prompt = require("prompt-sync")();
var array_1 = new Array(2);
var array_2 = new Array(2);
var sum = new Array(2);
getArray();
function getArray() {
    for (var i =0 ;i<array_1.length;i++){
        array_1[i] = new Array(2);
    }
    console.log("Enter first 2-D array :")
    for (var i = 0; i < 2; i++) { 
        for (var j = 0; j < 2; j++) { 
        array_1[i][j] = parseInt(prompt()); 
        }
    } 

    for (var i =0 ;i<array_2.length;i++){
        array_2[i] = new Array(2);
    }
    console.log("Enter second 2-D array :")
    for (var i = 0; i < 2; i++) { 
        for (var j = 0; j < 2; j++) { 
        array_2[i][j] = parseInt(prompt()); 
        }
    } 
    addArray();
}
function addArray() {
    for (var i = 0; i < sum.length; i++) { 
        sum[i] = new Array(2); 
    } 

    for (var i = 0; i < 2; i++) { 
        for (var j = 0; j < 2; j++) { 
            sum[i][j] = array_1[i][j] + array_2[i][j]; 
        } 
    }
    displayArray();
}
function displayArray() {
    console.log(sum);
}