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
  //first solution
  let strDouble = '';
  let str = String(integer);
  for (let i of str) {
    strDouble += String( i ** 2 )
  }
  return +strDouble

  // second solution
  // let str = String(integer);
  // return Array.from( str, num => num * num).join('')
}

alert( bouble( integer1 ) )

let integer1 = 7833;

function bouble( integer ) {
  
  let str = String(integer);

  return Array.from( str, num => num * num).join('')
}


alert( bouble( integer1 ) )



//codewars my second task 'abcdef' => ['ab', 'cd', 'ef']  done!!!

let str1 = 'dhfgbbcccczxx'

function twoLettersArr(str) {

  let arr = [];
  let arr1 = str.split('');
  console.log(arr1)
  do {
      let twoLetters = arr1.slice(0,2)
      arr1 = arr1.slice(2)
      console.log(arr1)
      if (twoLetters.length == 2) {
        arr.push( twoLetters.join('') )
      } else  if (twoLetters.length == 1) {
        arr.push( twoLetters.join('') + '_' )
      } else {
        arr
      }
  } while (arr1.length >= 1)
  console.log(arr)
  return  arr 

}

alert( twoLettersArr(str1) )

//not my solutions

let str = 'sdasf'

// function solution(str){
//   let i = 0;
//   let result = [];
//   if (str.length % 2 !== 0) {
//     str = str + '_';
//   }
//   while (i < str.length) {
//       result.push(str[i] + str[i+1]);
//       i += 2;
//     }
//   return result;
// }

function solution(str){
  let res = [];
  for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
   return res;
}

alert(solution(str))


*/

//  ======== Switch/case ======
/*
// codewars 1 task
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
 // []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

let names = ["Max", "John", "Mark", "Max", "John", "Mark"];

function likes(names) {
  let likes = '';
  switch (names.length) {
    case 0:
      likes = "no one likes this" ;
      break;
    case 1:
      likes = `${names[0]} likes this` ;
      break;
    case 2:
      likes = `${names[0]} and ${names[1]} like this` ;
      break;
    case 3:
      likes = `${names[0]}, ${names[1]} and ${names[2]} like this` ;
      break;
    default:
      likes = `${names[0]}, ${names[1]} and ${names.length - 2} others like this` ;
  }
  return likes;
}

alert(likes(names))
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

// ========= Map & Set ========
/** 

function unique(arr) {
  
  return Array.from( new Set( arr ) );
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O


function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
*/

// ========= Object.keys()/values()/entries() ======
/** 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  // let sum = 0;
  // let arr = Object.values(obj);
  // for (let prop of arr) {
  //   sum += prop
  // }
  // return sum
  
  return Object.values(obj).reduce( (sum, current) => sum + current, 0);
}

alert( sumSalaries(salaries) );



let user = {
  name: 'John',
  age: 30
};

function count( obj ) {
  return Object.keys(obj).length 
}

alert( count(user) ); // 2
*/

// ========= Деструктуризация ========
/** 

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false } = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false



let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

alert( topSalary(salaries) )

*/

// ========= Date & Time =============
/** 
//20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date = new Date(2012, 1, 20, 3, 12);

let date1 = new Date( Date.parse('2012-02-20T03:12:00.000+02:00') );

alert(date);
alert(date1);


// получить день недели
let date = new Date(2022, 8, 17);  // 3 января 2012 года

function getWeekDay(d) {
  let day = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SUT']
  let i = d.getDay()
  return day[i] //day[d.getDay()]
}
alert( getWeekDay(date) );        // нужно вывести "TUE"


// получить день недели европейский
let date = new Date(2012, 0, 3);  // 3 января 2012 года
  
function getLocalDay(d) {
  let day = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SUT'];
  let i = d.getDay()
  if (i == 0) {
    return `${day[i]} 7`
  } 
  return `${day[i]} ${i}` 
}

alert( getLocalDay(date) );       // вторник, нужно показать 2


//Какой день месяца был много дней назад?
let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);
//   return new Date(dateCopy.getTime() - days*24*60*60*1000)
// }

// функция не должна изменять объект date.
// Это очень важно, поскольку внешний код, передающий нам объект,
// не ожидает его изменения.
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// 5. Последнее число месяца?

//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  return new Date(year, (month + 1), 0).getDate()
}

alert( getLastDayOfMonth(2022, 1) )


// 6. Сколько сегодня прошло секунд?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// мой вариант выдавал погрешность в 3 часа, сделал поправку на них
// function getSecondsToday() {
//   return Math.round( ( (+Date.now() + 3*60*60*1000) % (24*60*60*1000) )/1000 )
// }

// alert( Date.now() )
// alert( getSecondsToday() )

function getSecondsToday() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

alert( getSecondsToday() );


// 7. Сколько секунд осталось до завтра?

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
  let now = new Date();

  // завтрашняя дата
  let tomorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

alert( getSecondsToTomorrow() );


// 8. Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );


function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}
*/

// ========= JSON,  toJSON() =========
/** 

// 1. Преобразуйте объект в JSON, а затем обратно в обычный объект

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let newUser = JSON.parse( JSON.stringify(user) );


// 2. Исключить обратные ссылки
// важность: 5
// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

// в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
*/

// ========= Stek, recurtion =========
/** 

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

alert( factorial(3) )


// Числа Фибоначчи
// важность: 5
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:



// function fib(n) {
//   let f = (((5 ** (1/2)) - 1)/2) + 1;
//   return Math.round( (f ** n)/(5 ** (1/2)) )
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757  // my result = 5527939700884771

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757
// Цикл начинается с i=3, потому что первое и второе значения последовательности заданы a=1, b=1.



// 3. Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

// через цикл
// function printReverseList(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     alert( arr[i] );
//   }
// }

// printReverseList(list);

// через рекурсию
function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);
*/

// ========= Замыкание and functions ===============
/** 
// 1. Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4



// 2. Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// .. ваш код для inBetween и inArray 
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// alert( arr1.filter(inArray([1, 2, 10])) ); // 1,2

// 3. Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

function byField(fieldName){
  return ((a, b) => a[fieldName] > b[fieldName] ? 1 : -1);
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.


// 4. Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// function makeArmy() {
//   let shooters = [];

  
//   for (let i = 0; i < 10; i++) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// }

// let counter = makeCounter();
// alert( counter.set(10) ); // 10
// alert( counter.decrease() ); // 9
// alert( counter.decrease() );


// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.


function sum(a) { 
  
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;

}

alert( sum(0)(1)(2)(3)(4)(5) )
*/

// ========= setTimeout, setIntervals ==============
/** 

// 1. Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.
// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

function printNumbers(from, to) {
  let current = from;
  
  setTimeout(function go() {
    alert(current);
    if (current < to){
      setTimeout(go, 1000)
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);
*/

// ========= codewars ========
/** 

// task 5
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++){
    if(integer % i == 0) arr.push( integer / i );
  }
  return  arr.length ? arr.sort( (a, b) => a - b ) : `${integer} is prime`;
};

alert(divisors(12))

//task6
//string  with letters from a to m.
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

function printerError(s) {
  let arr = s.split('').filter(item => item < 'n')
  let error = s.length - arr.length
  return `${error}/${s.length}`
}
alert( printerError(s) ) //  3/56
*/

// ==== Декораторы и переадресация вызова, call/apply ===
/** 

// task 1
// Декоратор-шпион
// важность: 5
// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

// Например:

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


function spy(func) {

  wrapper.calls = [];

  function wrapper(...args) {
    // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  return wrapper;
}



// task 2
// Задерживающий декоратор
// важность: 5
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

function delay(func, ms) {
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test')


// task 3
// Декоратор debounce
// важность: 5
// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

// Например:

// let f = debounce(alert('Yo'), 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
// На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы.

function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

// Вызов debounce возвращает обёртку. Возможны два состояния:

// isCooldown = false – готова к выполнению.
// isCooldown = true – ожидание окончания тайм-аута.
// В первом вызове isCoolDown = false, поэтому вызов продолжается, и состояние изменяется на true.

// Пока isCoolDown имеет значение true, все остальные вызовы игнорируются.

// Затем setTimeout устанавливает его в false после заданной задержки.


// task 4
//Тормозящий (throttling) декоратор

// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

// Пример кода:

// function f(a) {
//   console.log(a)
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
// P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// Вызов throttle(func, ms) возвращает wrapper.

// 1. Во время первого вызова обёртка просто вызывает func и устанавливает состояние задержки (isThrottled = true).
// 2. В этом состоянии все вызовы запоминаются в saveArgs / saveThis. Обратите внимание, что контекст и аргументы одинаково важны и должны быть запомнены. Они нам нужны для того, чтобы воспроизвести вызов позднее.
// 3. … Затем по прошествии ms миллисекунд срабатывает setTimeout. Состояние задержки сбрасывается (isThrottled = false). И если мы проигнорировали вызовы, то «обёртка» выполняется с последними запомненными аргументами и контекстом.
// На третьем шаге выполняется не func, а wrapper, потому что нам нужно не только выполнить func, но и ещё раз установить состояние задержки и таймаут для его сброс
*/