/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/


// Ctrl + /
/*
console.log(25);
console.log(10>2);
const yearOfBirth = true
console.log(typeof yearOfBirth)
*/

// тернарное выражение
/*
let time = 10
let greeting = time < 12 ? 'good afternoon' : 'good evening'
console.log(greeting)

(function () {
    console.log('yo-yo man');
})();
*/

// когда ф-ция что-то возврвщает, результат становиться на её место!!!!
/*let res = (function (a, b) {
    return a + b;
})(31, 19)

console.log(res)
*/

// arrow function in one line can be without {}
/*
const summ = (a, b) => a + b;
console.log(summ(3, 4))
*/

// masive methods - for(of)
/*
const letters = ['a', 'd', 'v', 'q', 'f'];

for (let letter of letters) {
    console.log(letter);
}
*/

// masive methods - forEach
/*
const letters = ['a', 'd', 'v', 'q', 'f'];

letters.forEach((letter, index) => console.log(`${index} -> ${letter} + ${letter} - ${index}`))

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
});
*/

// ======= Masive methods - splice =======
/*

array.splice(index[deleteCount, elem1, ..., elemN])
// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// console.log(arr); // осталось ["Я", "JavaScript"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов

// let arr = ["Я", "изучаю", "JavaScript"];
// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");
// alert( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

let arr = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 'three', 'four');
alert( arr ); // 1,2,'three','four',5
*/

// ======= Masive methods - slice =======
/*

//array.slice([start], [end])

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
//alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.
 */

// ======= Masive methods - concat =======
/*

//array.concat(arg1, arg2...)

let arr = [1, 2];
// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  length: 1
};
alert( arr.concat(arrayLike) ); // 1,2,[object Object]

let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё
*/

// ======= Masive methods - find/findIndex =======
/*

let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});
// Например, у нас есть массив пользователей, каждый из которых имеет поля id и name. Попробуем найти того, кто с id == 1:
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася
 */

// ======= Masive methods - find/findIndex =======
/*

let results = arr.filter(function(item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
]; 
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);  
alert(someUsers.length); // 2
 */

// class чертёж для будущих объектов
/*
const user1 = {
    userName: 'Bob',
    age: 22,
    isMarried: true
}

class User {
    constructor(userName, age, isMarried){
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }
    sayHi(name){
        console.log(`Hi ${name}! My name is ${this.userName}.`)
    }
}

const user2 = new User('Phil', 31, false)
console.log(user2)

user2.sayHi('Nick')
*/

// ============ Выбор DOM элемента на странице ============

// Выбор одного элемента по селектору
/*
document.querySelector('selector')

const header = document.querySelector('h1')
console.log(header)

document.querySelector('h2').classList.add('blue');
 
const header = document.querySelector('h2');
header.classList.add('red');
*/

// Выбор коллекции элементов
/*
// document.querySelectorAll('selector')
document.querySelector('h2').classList.add('red');
const headings = document.querySelectorAll('h2')
console.log(headings)

// headings.classList.add('red-text') it doesnt work

for (let heading of headings) {
    heading.classList.add('red-text');
}

const paragraphs = document.querySelectorAll('p')
for(let p of paragraphs){
    p.classList.add('green-text')
}

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach( p => p.classList.add('green-text'))


// Также есть следуюие методы

document.getElementsByClassName('link') // выбор коллекции элементов по CSS классу
document.getElementsByTagName('section') // выбор коллекции элементов по Тэгу
document.getElementById('header') //выбор одного элемента по ID т.к. он уникальный
*/ 

// ============ Работа с CSS классами ============ 
/*
elements.classList.add()
  .add()
  .remove()
  .toggle() - добавляет выбранный класс если его не было и даёт true или удалет его если он был и даёт false
  .contains() - возвращает true or false(в зависимости от того есть выбранный класс или нет)


const headings = document.querySelector('h2')
console.log(headings)
headings.classList.add('red-text', 'green');
headings.classList.remove('red-text','green')
headings.classList.toggle('green-text')

headings.classList.contains('green-text')
console.log(headings.classList.contains('green-text'))

const res = headings.classList.contains('red')

if (res) {
    
} else {

}
*/

// ============ Работа с атрибутами ============
/*
ex: src, alt, value, placeholder, type etc 

getAttribute(attrName) - возвращает значение указаного атрибута
setAttribute(name, value) - добавляет указанный атрибут и его значение кэлементу
hasAttribute(attrName) - возвращает true при наличие у элемента указанного атрибута
removeAttribute(attrName) удаляет указанный атрибут

toggleAttribute(name, force) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут
hasAttributes() - возвращает true, если у элемента имеется какой-либо атрибут
getAttributeNames() - возвращает названия атрибутов элемента


const img = document.querySelector('#logo')
const srcValue = img.getAttribute('src')
console.log(srcValue)

img.setAttribute('src', './img/php.png')
img.setAttribute('width', '200')

// src можно менять на прямую
img.src = './img/js.png'
img.removeAttribute('width')
console.log(img.hasAttribute('width'))

const button = document.querySelector('#button')
button.value = 'Send it'

// есть еще data attributes которые меняются через dataSet почитать
*/

// ============ Работа с прослушкой событий ============
/*
Любое движение мыши или курсора, нажатие кнопки и т.д это событие! Его можно отслеживать и на него можно реагировать!

const button = document.querySelector('#button')
const img = document.querySelector('#logo')

button.value = 'Delete img'
// позволяет прослушивать одно и тоже событие сколько угодно раз, добавить разные обработчики
// button.addEventListener('click', function(){
//     console.log('Click 1!')
//     img.remove() //method remove delete element from the html
// })
// button.addEventListener('click', function(){
//     console.log('Click 2!')
//     img.remove() //method remove delete element from the html
// })
// button.addEventListener('click', function(){
//     console.log('Click 3!')
//     img.remove() //method remove delete element from the html
// })

// если делать на прямую то можно прослушать лишь один раз!!! Имеет смысл делать так если больше не будет никаких обработчиков!
button.onclick = function () {
    console.log('Click!')
    img.remove() //method remove delete element from the html
}
*/

// ============ Работа с прослушкой событий 2 - input ============
/*
const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')

// inputText.addEventListener('input', function() {
//     // console.log('Input!')
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })

// or
// inputText.addEventListener('input', () => {
//     // console.log('Input!')
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })

// or
inputText.addEventListener('input', inputHandler)
function inputHandler() {
    // console.log('Input!')
    console.log(inputText.value)
    textBlock.innerText = inputText.value
}
*/

// ============ Объект event ============
/*


const list = document.querySelector('#list')

list.addEventListener('click', function(event){
    //console.log(this) //не важно куда ты кликнеш внутри списка, ты обращаешся к ul
    //console.log(event) //обращаешся к символу по которому кликнул
    console.log(event.target) //обращаешся к полю в котором находится символ по которому кликнул
})

*/ 

// ============ Работа с элементами =========
/*

//БАЗОВЫЕ
// создание элемента
document.createElement('tag-name')

//изменять HTML содержимое внутри элемента
element.innerHTML = ''

//изменять Tекстовое содержимое внутри элемента
node.innerText = '' or node.textContent = ''

// клонирование элемента
node.cloneNode() // true с внутренним содержимым(текст и теги),                 false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMString)

//удалить элемент
element.remove() 


const container = document.querySelector('#elementsContainer') // selected container by ID

//creating title
const newTitle = document.createElement('h1')

newTitle.textContent = 'New title!' //textContent equal to innerText

//add newTitle to container
container.append(newTitle)

//cloning element - 'header'
// const mainHeader = document.querySelector('header')

// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

//вставка разметки через строки
const htmlExample = '<h2>One more title</h2>'
container.insertAdjacentHTML('beforeend',htmlExample)

//вставка разметки через шаблонные строки
const title = 'Title`s text'
const htmlExample2 = `<h2>${title}</h2>`
container.insertAdjacentHTML('afterbegin', htmlExample2)
*/

// ============ ToDo task`s list =========
/*


const todoList  = document.querySelector('#todo-list')
const todoForm  = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')


todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()//отменяем стандартное поведение формы при подписке
    //console.log('Submit!')
    const taskText = todoInput.value

    //method number one
    // const htmlLi = `<li>${taskText}</li>`
    // todoList.insertAdjacentHTML('beforeend', htmlLi)
    // todoInput.value = ''

    const newTask = document.createElement('li')
    newTask.textContent = taskText

    //создаём кнопку удалить для li
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('role', 'button')
    deleteButton.textContent = 'Delete'
    deleteButton.style['marginLeft'] = '15px'
    newTask.append(deleteButton)

    deleteButton.addEventListener('click', () => {
        this.closest('li').remove()
    })
     
    todoList.append(newTask)

    //очищаем поле ввода
    todoInput.value = ''

    //фокус на поле ввода
    todoInput.focus()
}
*/

// ============ setInterval =========

/*
const timerIntervalID = setInterval(function(){
    console.log('Fired!')
}, 1000)

//console.log(timerIntervalID)

//clearInterval(timerIntervalID)
*/

// ============ setTimeout =========

/*
const timerID = setTimeout(function(){
    console.log('setTimeout Fired!')
}, 5000)

clearInterval(timerID)


const timerIntervalID = setInterval(function(){
    console.log('setInterval Fired!')
}, 1000)

const timerID = setTimeout(function(){
    clearInterval(timerIntervalID)
}, 10100)
*/

// ============ Timer =========
/*
const counterUI = document.querySelector('#counter')
let counter = 0
let timerID

const btnStart = document.querySelector('#start')
btnStart.onclick = function() {
    timerID = setInterval(function(){
        counter = counter + 1 
        // counter =+ 1
        // counter++ 
        counterUI.textContent = counter    
    }, 1000) 
}   

const btnPause = document.querySelector('#pause');
btnPause.onclick = function() {
    clearInterval(timerID);
}

const btnReset = document.querySelector('#reset')
btnReset.onclick = function() {
    clearInterval(timerID)
    counter = 0
    counterUI.textContent = counter
} 
 */

// ============ Callback, Callback hell =========
/*
//first example
setTimeout(function(){
    console.log('Step 1')
}, 2000)

setTimeout(function(){
    console.log('Step 2')
}, 1500)

setTimeout(function(){
    console.log('Step 3')
}, 1000)

setTimeout(function(){
    console.log('Step 1')
    setTimeout(function(){
        console.log('Step 2')
        setTimeout(function(){
            console.log('Step 3')
        }, 1000)
    }, 1500)
}, 2000)


//second example
function checkRooms() {
    setTimeout(function(){
        console.log('Find available rooms in hotel!')
    const availableRooms = true
    return availableRooms
    }, 1000)
}

if(checkRooms()){
    console.log('There are available rooms!')
    console.log('Lets go to vication!')
} else {
    console.log('There isn`t any empty room!')
    console.log('Vication canceled :(')
}

function checkRooms() {
    setTimeout(function () {
        console.log('Find available rooms in hotel!')
        const availableRooms = true

        if (availableRooms) {
            console.log('There are available rooms!')
            console.log('Lets go to vication!')
        } else {
            console.log('There isn`t any empty room!')
            console.log('Vication canceled :(')
        }
    }, 1000)
}

checkRooms()

//third example

function checkRooms() {
    setTimeout(function () {
        console.log('Find available rooms in hotel!')
        const availableRooms = true

        if (availableRooms) {
            
        } else {
            
        }
    }, 1000)
}
*/

// ============ Promises =========
/*

let message

const myPromise = new Promise(function(resolve, reject){
    console.log('Promise created')
    setTimeout(function(){
        const response = true;
         
        if(response){
            let message = "SUCCESS"
            resolve(message);
        } else {
            let message = "FAILED"
            reject(message)
        }
    }, 1000)
})

// myPromise.then(function(data){
//     console.log(`Then ${message}`)
//     console.log(data)
// }).catch(function(){
//     console.log(`Catch ${message}`)
// })

// ====== Без задержки =======
// myPromise.then(function(data){
//     console.log(`Then 1`)
//     console.log(data)
//     return 'Data from then 1'
// }).then(function(data){
//     console.log('Then 2')
//     console.log(data)
// })
// .catch(function(data){
//     console.log(`Catch`)
//     console.log(data)
// })

// ====== С задержкой =======
myPromise.then(function(data){ 

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log(`Then 1`)
            console.log(data)

            const response = false

            if(response){
                resolve('Data from then 1')
            } else {
                reject('Data from then 1')
            }
        }, 2000)
    })
    
}).then(function(data){
    console.log('Then 2')
    console.log(data)
})
.catch(function(data){
    console.log(`Catch`)
    console.log(data)
})
*/

// ===== Цепочка промисовю Несколько промисов с setTimeout ======
/*
const checkRooms = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Проверяем наличие свободных номеров в гостиннице...')
        const availableRooms = true

        if(availableRooms){
            resolve('Available rooms exist!')
        } else {
            reject('there isn`t any available room :(')
        }
    }, 2000)
})

checkRooms.then(function(data){
    
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('---- then 1 ----')
            console.log('Ответ на предидущем шаге:', data)
            console.log('Проверяем авиабилеты...')
            const availablTickets = true

        if(availablTickets){
            resolve('Available tickets exist!')
        } else {
            reject('there isn`t any available tickets :(')
        }
        }, 2000)
    })
}).then(function(data){
    console.log('---- then 2 ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Едем в отпуск! :)')
}).catch(function(data){
    console.log('---- catch ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Отпуск отменяется! :(')
})
 */


// ===== Цепочка промисов. Отдельные ф-ции. Несколько промисов с setTimeout======
/*

checkRooms()
    .then(checkTicket)
    .then(success)
    .catch(failed)

function checkRooms() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Проверяем наличие свободных номеров в гостиннице...')
            const availableRooms = true
    
            if(availableRooms){
                resolve('Available rooms exist!')
            } else {
                reject('there isn`t any available room :(')
            }
        }, 2000)
    })
}

function checkTicket(data) {   
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('---- then 1 ----')
            console.log('Ответ на предидущем шаге:', data)
            console.log('Проверяем авиабилеты...')
            const availablTickets = true

        if(availablTickets){
            resolve('Available tickets exist!')
        } else {
            reject('there isn`t any available tickets :(')
        }
        }, 2000)
    })
}

function success(data) {
    console.log('---- success ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Едем в отпуск! :)')
}

function failed(data) {
    console.log('---- failed ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Отпуск отменяется! :(')
}
 */

// ===== async/await ======
/*


function checkRooms() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Проверяем наличие свободных номеров в гостиннице...')
            const availableRooms = false
    
            if(availableRooms){
                resolve('Available rooms exist!')
            } else {
                reject('there isn`t any available room :(')
            }
        }, 2000)
    })
}

function checkTicket(data) {   
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('---- then 1 ----')
            console.log('Ответ на предидущем шаге:', data)
            console.log('Проверяем авиабилеты...')
            const availablTickets = true

        if(availablTickets){
            resolve('Available tickets exist!')
        } else {
            reject('there isn`t any available tickets :(')
        }
        }, 2000)
    })
}

function submitVacation(data) {
    console.log('---- success ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Едем в отпуск! :)')
}

function cancelVacation(data) {
    console.log('---- failed ----')
    console.log('Ответ на предидущем шаге:', data)
    console.log('Отпуск отменяется! :(')
}

async function checkVacation(){
    try {
        const roomsResult = await checkRooms()
        const ticketsResult = await checkTicket(roomsResult)
        submitVacation(ticketsResult)
    } catch (err) {
        cancelVacation(err)
    }
}

checkVacation()
 */

// ===== Курс валют. Получаем данные с сервера then ======
/*
// с помощью then
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function(data){
        return  data.json()
    }).then(function(data){
        console.log(data)
    })
*/

// ==== Курс валют. Получаем данные с сервера async/await ===
/* 
async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()
    
    // console.log(data.Valute.USD.Value.toFixed(2))
    // console.log(data.Valute.EUR.Value.toFixed(2))
    // toFixed ограничивает количество знаков псле запятой

    // достаём курсы из сервера
    const usdRate = data.Valute.USD.Value.toFixed(2)
    const eurRate = data.Valute.EUR.Value.toFixed(2)

    // Отображаем элементы на странице
    const usdElement = document.querySelector('#usd')
    usdElement.textContent = usdRate
    const eurElement = document.querySelector('#eur')
    eurElement.textContent = eurRate
}

getCurrencies ()
*/

// ==== Курс валют. Получаем данные с сервера async/await 2 ===
/* 
async function getCurrencies () {
    // 1. получаем данные с сервера
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()

    // 2. отображаем эти данные на странице
    renderRates(data)
}

getCurrencies ()

// вынесли работу со страницей в отдельную ф-цию
function renderRates(data) {
    // достаём курсы из сервера
    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    // Отображаем элементы на странице
    const usdElement = document.querySelector("#usd");
    const eurElement = document.querySelector("#eur");
    
    usdElement.textContent = usdRate;
    eurElement.textContent = eurRate;
}
*/


// ==== ЗАДАЧИ по массивам ===
/*
 

// Задача 1
// function filterRange(arr, a, b) {
//     // добавлены скобки вокруг выражения для улучшения читабельности
//     return arr.filter(item => (a <= item && item <= b));
// }

// let arr1 = [8, 15, 33, 6, 17]

// let filter = filterRange(arr1, 7, 33)
// console.log(filter)


// Задача 2
// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // удалить, если за пределами интервала
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }

//   let arr = [5, 3, 8, 2, 10, 1];  
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4  
//   console.log( arr ); // [3, 1]
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log( arr );


// Задача 3
// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   console.log( sorted );
//   console.log( arr );

// Задача 4
//   function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }

// Задача 4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a); // ... ваш код для сортировки по убыванию

// console.log( arr );


// Задача 5 & 6
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let names = users.map( item => item.name)

let usersMapped = users.map( user => ({fullName: `${user.name} ${user.surname}`, id: user.id}) )


// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]


console.log(names)
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин



//Задача 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

let arrAge = arr.map( age => age.age ) 

function sortByAge(arrAge)  {
    return arrAge.sort()
}

console.log(arrAge)

console.log(arrAge[0].age); // 25
console.log(arrAge[1].age); // 28
console.log(arrAge[2].age); // 30


function sortByAge(arr)  {
    //return arr.sort((a, b) => a.age > b.age ? 1 : -1 )
    return arr.sort((a, b) => a.age - b.age )
}

sortByAge(arr); 

console.log(arr)

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя


//Задача 8
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let maks = { name: "Маша", age: 1 };

let arr = [ vasya, petya, masha, maks ];

// function getAverageAge(arr) {
//     return arr
//         .map(item => item.age)
//         .reduce((sum, current) => sum + current, 0)/arr.length
// }

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

console.log( getAverageAge(arr) ); // (25 + 30 + 29 + 1) / 4 = 21.25


//Задача 9
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
 console.log( strings ); 
 console.log( unique(strings) ); // кришна, харе, :-O


//Задача 10
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  console.log(usersById)

  
  // после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
 


//Задача 10
  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 ** 3");
  alert( result ); // 8

  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }


'use strict';

let number = prompt('Введите число?', 0);

if (number > 0) {
    alert( 1 );
} else if (number < 0) {
    alert( -1 );
}
else {
    alert( 0 );
}
 

let result = (a + b < 4) ? 'Мало': 'Много';
*/

let userName = prompt('Кто там?','');

if (userName == 'Админ') {
    let adminPass = prompt('Пароль?','');
    if (adminPass == 'Я Главный') {
        alert('Привет');
    } else if (adminPass == null || adminPass == '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userName == null || userName == '') {
    alert('Отменено');
}else  {
    alert('Я вас не знаю');
} 



