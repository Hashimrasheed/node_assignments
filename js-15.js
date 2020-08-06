const prompt = require("prompt-sync")();

function main(){
    let size = parseInt(prompt("Enter size of array :"))
    getArray(size);
}
function getArray(size){
    let arr = new Array();
    console.log("Enter array values :");
    for(let i=0; i<size;i++){
        arr[i] = parseInt(prompt());
    }
    displayArray(arr);
}
function displayArray(arra){
    console.log(arra);
}
