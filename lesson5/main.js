// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a, b) {
//     return  result = a * b;
// }
// let x = areaRectangle(5, 8)
// console.log(x)

//______________________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle(x, r) {
//     let result = x * r**2;
//     console.log(result)
// }
// areaCircle(3.14, 5)

//______________________________________________________________________________________________________________________
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(x, h, r) {
//     let result = 2 * x * h * r;
//     console.log(result)
// }
// areaCylinder(3.14, 5, 3)

//______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr(array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// arr([1,2,3,4]);

//______________________________________________________________________________________________________________________
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function create(p) {
//     document.write(`<p>${p}</p>`)
// }
// create('Hi! How are you?')

//______________________________________________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// list('Hello!')

//______________________________________________________________________________________________________________________
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text, numLi) {
//     document.write(`<ul>`)
//     for (let i = 0; i < numLi; i++) {
//         document.write(`<li>${text}</li>`)
// }
//     document.write(`</ul>`)
// }
// list('Hello!', 3)

//______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(array) {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list([12, 34, 'Hello', false, true])

//______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.

// let users = [
//     {
//         id: 12345,
//         name: 'Ivan',
//         age: 25
//     },
//     {
//         id: 67890,
//         name: 'Olha',
//         age: 29
//     },
//     {
//         id: 24680,
//         name: 'Mariya',
//         age: 18
//     }
// ]
// let foo = function (object) {
//     for (const item of object) {
//         document.write(`<div>${item.id}:${item.name}-${item.age}</div>`)
//     }
// }
// foo(users)

//______________________________________________________________________________________________________________________
// - створити функцію яка повертає найменьше число з масиву

// let array = [1, 3, 0, -5];
// let minNum = function (arr) {
//     let min = arr[0];
//     for (const item of arr) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// let minNum1 = minNum(array);
// console.log(minNum1)

//______________________________________________________________________________________________________________________
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


//______________________________________________________________________________________________________________________
