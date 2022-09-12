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
        // return this.a + this.b
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

// ======== Number ========
/** 
function readNumber() {
    let num;
    do {
        num = prompt('text number', 0)
        if ( num === null || num === '') return null;
    } while ( !isFinite(num) )
    
    return +num
}

alert(`Number: ${readNumber()}`)


function random(min, max) { 
  return min + Math.random() * ( max - min );
}

alert(random(2, 4))


function random(min, max) { 
  let rand = min + Math.random() * ( max + 1 - min );
  return Math.floor(rand)
}

alert(random(2, 4))
*/

//  ======== Strings ========
/** 

function ucFirst(str) {
  if(!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

let str1 = "";
alert(ucFirst(str1))


function checkSpam(str) {
  let strLower = str.toLowerCase()
  return strLower.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam("innocent rabbit") == false );


function truncate(str, length) {
  // if ( str.length > length ) return str.slice(0, ( length - 1 )) + '...'
  // return str
  return ( str.length > length ) ? 
  str.slice(0, ( length - 1 )) + '...' : str
}

alert( truncate( "Вот, что мне хотелось бы сказать на эту тему:", 20 ) ); //= "Вот, что мне хотело…"
alert( truncate( "Всем привет!", 20 ) ); //= "Вот, что мне хотело…"


alert( extractCurrencyValue('$120') === 120 );

function extractCurrencyValue( price ) {
  return +price.slice(1)
}

let integer1 = 9119;

function bouble( integer ) {
  let strDouble = '';
  let str = String(integer);
  for (let i of str) {
    strDouble += String( i * 2 )
  }
  return +strDouble
}

alert( bouble( integer1 ) )
*/

// ========= Massives =========
/** 

let styles = ['Jazz', 'Bluze'];

styles.push('Rock-n-Roll');

styles[Math.round(styles.length/2)] = 'Classic';  // ?????

styles.shift();

styles.unshift('Rap', 'Reggy');

styles[Math.floor((styles.length - 1) / 2)] = 'Center';

alert( styles )
*/


function sumInput() {
  let x;
  let sum = 0;
  let arr = [];
  if ( x !== null || x !== '') {
    x = prompt( 'Text integer', 0 );
    arr.push( +x );
    for (let item of arr) {
      sum += +item
    }
  } return sum;
  
}

sumInput();
