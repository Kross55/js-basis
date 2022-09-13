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

//codewars my first task  9119 => 811181
let integer1 = 9119;

function bouble( integer ) {
  let strDouble = '';
  let str = String(integer);
  for (let i of str) {
    strDouble += String( i ** 2 )
  }
  return +strDouble
}

alert( bouble( integer1 ) )



//codewars my second task 'abcdef' => ['ab', 'cd', 'ef']  not finished

let str1 = 'abcdef'

function twoLettersArr(str) {

  let arr = str.split('');  // ['a', 'b', 'c', 'd', 'e', 'f']
  console.log(arr);

  // for (let i = 0; i < str.length; i++) {
  //   arr.push( str[i] ) ;
  // }
  
  return alert(arr)
}

console.log( twoLettersArr(str1) )


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




function sumInput() {
  
  let arr = [];
  while ( true ) {
    let x = prompt( 'Text integer', 0 );
    
    // Прекращаем ввод?
    if ( x === null || x === '' || !isFinite(x) ) break;

    arr.push( +x );
    console.log( arr );
  }

  let sum = 0;
  for (let item of arr) {
    sum += item 
  }
  return alert( sum ); 
}

sumInput();




function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0


let str1 = "background-color"

function camelize(str) {
  
  let arrStr = str.split('')
  console.log( arrStr );
  
  let minusDefis = arrStr;
  while ( arrStr.includes('-') ) {
  let defis = arrStr.findIndex( item => item === '-' );
  console.log( defis );

  minusDefis.splice( defis, 1 )
  minusDefis[ defis ] = minusDefis[ defis ].toUpperCase()
  }
  return minusDefis.join('') ;
  
}

// camelize("background-color") == 'backgroundColor';
console.log( camelize(str1) );


function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}


let arr = [5, 3, 8, 1, 2, 33, 1, 7, 15, 0];

function filterRange(arr, a, b) {
  return arr.filter( item => a <= item && item < b)
};

let filtered = filterRange(arr, 1, 9);

alert( filtered );

alert( arr )




function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1, 2, 33, 1, 7, 15, 0];

filterRangeInPlace(arr, 1, 9); // удалены числа вне диапазона 1..9

alert( arr );



let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a )

alert( arr ); // 8, 5, 2, 1, -10



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
  return arr.sort( (a, b) => (a.age > b.age) ? 1 : -1 )
}

console.log(sortByAge(arr));

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя





let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort()
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map( item => item.name )

alert( names ); // Вася, Петя, Маша
console.log( names ); // Вася, Петя, Маша




let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( item => ({ 
  fullName: `${item.name} ${item.surname}`, 
  id: item.id 
}) )

//
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
console.log(usersMapped);




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let mash = { name: "Маша", age: 1 };

let arr = [ vasya, petya, masha, mash ];

function getAverageAge(arr) {
  let arrAge = arr.map( item => item.age)
  
  return ( arrAge.reduce((sum, current) => sum + current, 0) / arrAge.length )

  //return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28




let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

*/
