const prompt = require("prompt-sync")();

class array{
    constructor(){
        this.arr = new Array(2);
        for (var i=0;i < this.arr.length;i++){
            this.arr[i] = new Array(2);
        }
    }

    getArray(){
        console.log("Enter array values :");
        for (var i = 0; i < 2; i++){
            for (var j = 0; j< 2; j++){
                this.arr[i][j] = parseInt(prompt());
            }
        }
    }
    displayArray(){
        console.log(this.arr);
    }
    
}
function main(){
     const class_array = new array();
     class_array.getArray();
     class_array.displayArray();
}
main();