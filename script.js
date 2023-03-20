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



let Bulb = function(power, cost) {
    this.power = power;
    this.cost = cost;

    this.chekCondition = function(){ 
        if(/^\d*$/g.test(this.power) === false || /^\d*$/g.test(this.cost) === false){
            alert("Вы неверно указали данные");
            return;
        } 
        
        this.p = document.createElement('p');
        this.p.innerHTML = 'Мощность лампочки ' + this.power;
        document.body.prepend(this.p);

        this.p2 = document.createElement('p');
        this.p2.innerHTML = 'Стоимость электроэнергии ' + this.cost;
        document.body.prepend(this.p2);

        this.btnOn = document.querySelector('.btnOn');
        this.btnOn.addEventListener('click', () => {
            bulb.countF();
        })
    }

    this.countF = function() {
        this.btnOn.disabled = true;
        this.i = 0;

        this.time = document.querySelector('.time');
        this.time.style.color = 'blue';

        this.resultCost = document.querySelector('.reusltCost');
        this.resultCost.style.color = 'red';

        this.timer = setInterval(() => {
            this.i++;
            this.time.innerHTML = this.i + ' сек.';

            this.price = (this.power * this.cost)/1555 *this.i; // рандомная формула

            this.resultCost.innerHTML = this.price.toFixed(3) + ' коп.';
        }, 1000);
    }

    this.offBulb = function() {
        const offCount = document.querySelector(".btnOff");
        offCount.addEventListener('click', () => {
            this.btnOn.disabled = false;
            clearInterval(this.timer);
        })
    }
}

let bulb = new Bulb(prompt("Введите мощность лампочки"), prompt("Введите стоимость электроэнергии"));
bulb.chekCondition();
bulb.offBulb();




let Car = function() {

    this.brend = document.querySelector('.car__brend');
    this.num = document.querySelector('.car__num');
    this.start = document.querySelector('.car__btnStart');

    let timer = 0;
    this.speedCount = 0;
    this.distanceCount = 0;

    this.checkData = function () {
        this.start.addEventListener('click', () => {
            if(/^\w{3,}$/g.test(this.brend.value) === false || /^[\w\d-]{5,}$/g.test(this.num.value) === false) {
                alert('Введите все данные корректно')
            }else{
                alert('Двигатель запущен')

                this.btnForward = document.createElement('button');
                this.btnForward.innerHTML = "Вперед";
                document.body.append(this.btnForward);

                this.stop = document.createElement('button');
                this.stop.innerHTML = "Стоп";
                document.body.append(this.stop);
                this.stop.disabled = true;

                this.btnBack = document.createElement('button');
                this.btnBack.innerHTML = "Назад";
                document.body.append(this.btnBack);
                
                this.speed = document.createElement('p');
                this.speed.innerHTML = "Текущая скорость: ";
                document.body.append(this.speed);

                this.distance = document.createElement('p');
                this.distance.innerHTML = "Вы проехали: ";
                document.body.append(this.distance);

                setInterval(() => {
                    this.distanceCount += this.speedCount/16600;
                    this.distance.innerHTML = 'Вы проехали: '+ this.distanceCount.toFixed(3) + 'км';
                    if(this.speedCount !== 0) this.btnForward.disabled = true;
                    else this.btnForward.disabled = false;

                    if(this.speedCount !== 0) this.btnBack.disabled = true;
                    else this.btnBack.disabled = false;

                }, 100);

                this.btnForward.addEventListener('click', () => {
                    this.goForward();
                    this.stop.disabled = false;
                })

                this.stop.addEventListener('click', () => {
                    this.stopCar();
                    this.stop.disabled = true;
                })

                this.btnBack.addEventListener('click', () => {
                    this.goBack();
                    this.stop.disabled = false;
                })
            }
        })
    }   

    this.goForward = function() {
         timer = setInterval(() => {
            this.speedCount++;
            this.speed.innerHTML = 'Текущая скорость: ' + this.speedCount + 'км/ч';

            if(this.speedCount === 80){
            alert('Стоит ограничитель');
            clearInterval(timer);
            } 
        }, 100);
    }

    this.goBack = function() {
        timer = setInterval(() => {
            this.speedCount++;
            this.speed.innerHTML = 'Текущая скорость: ' + this.speedCount + 'км/ч';

            if(this.speedCount === 25){
                alert('Максимальная скорость');
                clearInterval(timer)
            } 
        }, 200);
    }

    this.stopCar =  function() {
        clearInterval(timer);

        timer = setInterval(() => {
            this.speedCount--;
            this.speed.innerHTML = 'Текущая скорость: ' + this.speedCount + 'км/ч';
            if(this.speedCount === 0){
                alert('Остановились');
                clearInterval(timer);
            } 
        }, 20);
    }
    
}

let car = new Car();
car.checkData();
 


let Teapot = function(power, v, amountOfWater, condition) {
    this.power = power;
    this.v = v;
    this.amountOfWater = amountOfWater;
    this.condition = condition;

    this.checkData = function() {
        if(this.amountOfWater > this.v){
            console.log("Неверные данные");
            return;
        }

        if(!this.condition){
            console.log("Чайник не запущен");
            console.log('\n');
            return;
        }else{
            this.calc();
        }
    }

    this.calc = function() {
        this.time = (0.00117 * this.amountOfWater * 80 / this.power).toFixed(2);
        this.show();
    }

    this.show = function() {
        console.log(`Мощность ${this.power}кВт\nОбъем ${this.v}мл\nКоличество воды в чайнике ${this.amountOfWater}мл\nВода закипит за ${this.time} мин.`);
        console.log('\n');
    }

}

const teapot = new Teapot(10, 1000, 900, true);
teapot.checkData(); 

const teapot2 = new Teapot(12, 1500, 500, true);
teapot2.checkData();

const teapot3 = new Teapot(7, 800, 500, false);
teapot3.checkData();

const teapot4 = new Teapot(5, 600, 400, true);
teapot4.checkData();



