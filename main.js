'use strict'

// ========  this.  =====
/** 
let calculator = {
    // a: 5,
    // b: 5,
    read() {
        this.a = +prompt('a?', 0); 
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

console.log( calculator )
*/

/** 
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
};

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
 */

  //  ======== constructor - new User - ===========
/** 
  function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- возвращает этот объект
  }
  
  alert( new BigUser().name );  // Godzilla, получили этот объект


  function SmallUser() {

    this.name = "John";
  
    return; // <-- возвращает this
  }
  
  alert( new SmallUser().name );  // John
  
let obj = {};

function A() { return obj }
function B() { return obj }

let a = new A;
let b = new B;

alert( a == b ); // true


function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0); 
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b
    };

    this.mul = function() {
        return this.a * this.b
    };
};

let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function() {
        // this.newValue = +prompt('New value?', '')
        // this.value += this.newValue
        this.value += +prompt('New value?', '')
    }
}

let accumulator = new Accumulator(10); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/