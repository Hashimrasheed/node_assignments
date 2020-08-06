class calculator{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;

    }
    addition(){
        let sum = this.num1 + this.num2;
        return sum;
    }
    subtract(){
        let minus = this.num1 - this.num2;
        return minus;
    }
    multiply(){
        let mul = this.num1 * this.num2;
        return mul;
    }
    division(){
        let divide = this.num1 / this.num2;
        return divide;
    }
}
module.exports = calculator;