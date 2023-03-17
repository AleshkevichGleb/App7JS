"use strict"


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


/*Попробовал связать с html, если все ужасно, то перепишу вывод информации 
на обычные функции (alert, prompt)*/ 

let Bulb = function(power, cost) {
    this.power = power;
    this.cost = cost;
    this.condition = confirm('Включить лампочку?');

    this.chekCondition = function(){ 

        if(/^\d*$/g.test(this.power) === false || /^\d*$/g.test(this.cost) === false){
            alert("Вы неверно указали данные");
            return;
        } 


        if(this.condition) alert('Лампочка запущена');
        else return;
        
        this.p = document.createElement('p');
        this.p.innerHTML = 'Мощность лампочки ' + this.power;
        document.body.prepend(this.p);

        this.p2 = document.createElement('p');
        this.p2.innerHTML = 'Стоимость электроэнергии ' + this.cost;
        document.body.prepend(this.p2);

        bulb.countF();

    }

    this.countF = function() {
        
        this.i = 0;
        this.timer = setInterval(() => {
            this.i++;
            document.querySelector('.input').value = this.i + ' сек.';
            this.price = (this.power * this.cost)/1555 *this.i; // рандомная формула
            document.querySelector('.reusltCost').value = (this.price).toFixed(3)+ " коп."
            bulb.offBulb();
        }, 1000);
    }

    this.offBulb = function() { // не останавливает
        this.offCount = document.querySelector(".btnOff");
        this.offCount.onclick = function() {
            clearInterval(timer)
        }
    }
}

let bulb = new Bulb(prompt("Введите мощность лампочки"), prompt("Введите стоимость электроэнергии"));
bulb.chekCondition();
