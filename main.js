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


const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
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
*/

const timerIntervalID = setInterval(function(){
    console.log('setInterval Fired!')
}, 1000)

const timerID = setTimeout(function(){
    clearInterval(timerIntervalID)
}, 10100)
