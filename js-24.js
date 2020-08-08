const prompt = require("prompt-sync")();
const Area = require("./js-24-class");

class myClass extends Area {
    main(){
        console.log("1 circle \n2 Rectangle \n3 square \n4 triangle ");
        let val = parseInt(prompt("Enter Your choice to find area : "))


        switch (val) {
            case 1:
                let radius = parseInt(prompt("Enter the radius :"));
                this.circle(radius)
                break;
            case 2:
                let side1 = parseInt(prompt("Enter the lengh of first side :"));
                let side2 = parseInt(prompt("Enter the lengh of second side :"));
                this.rectangle(side1,side2)
                break;
            case 3:
                let side = parseInt(prompt("Enter the lengh of side :"));
                this.square(side)
                break;
            case 4:
                let base = parseInt(prompt("Enter the lengh of base :"));
                let height = parseInt(prompt("Enter the height of triangle :"));
                this.triangle(base,height)
                break;
            default:
                console.log("invalid entry");
            
        }
    }
}
var mc = new myClass();
mc.main();