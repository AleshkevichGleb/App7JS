"use strict"

console.time('test');
let Calculator = function() {

    this.condition = confirm("Запустить калькулятор?");

    this.checkCondition = function(){
        if(this.condition) alert("Calculator is running");
        else return;
    };

    this.getData = function() {
        this.a = +prompt("Enter first number");
        this.b = +prompt("Enter second number");
        this.sym = prompt("Enter a math operation")
    };

    this.calc = function() {
        switch(this.sym){
            case '+':
                this.c = this.a + this.b;
                alert(`${this.a} ${this.sym} ${this.b} = ${this.c} `);
                break;
            case '-':
                this.c = this.a - this.b;
                alert(`${this.a} ${this.sym} ${this.b} = ${this.c} `);
                break;
            case '/':
                this.c = this.a / this.b;
                alert(`${this.a} ${this.sym} ${this.b} = ${this.c} `);
                break;
            case '*':
                this.c = this.a * this.b;
                alert(`${this.a} ${this.sym} ${this.b} = ${this.c} `);
                break;

            default: console.log('error')
            
        }
    }
}

let calculator = new Calculator();
calculator.checkCondition();
calculator.getData();
calculator.calc();