// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3

// let x = 5;
//
// if (x !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у
// першу, другу чи третю).

// let time = 35;
// if (time >= 0 && time <= 15) {
//     console.log('first')
// } else if (time >= 16 && time <= 30) {
//     console.log('second')
// } else if (time >= 31 && time <= 45) {
//     console.log('third')
// } else if (time >= 46 && time <= 59) {
//     console.log('fourth')
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let day = +prompt('what decade of the month does the number fall into?')
// if (day >= 1 && day <= 10) {
//     document.write('first')
// } else if (day >= 11 && day <= 20) {
//     document.write('second')
// } else if (day >= 21 && day <= 31) {
//     document.write('third')
//
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let schedule = prompt('enter the day of the week');
//
// switch (schedule) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2' :
//         console.log('Tuesday');
//         break;
//     case '3' :
//         console.log('Wednesday');
//         break;
//     case '4' :
//         console.log('Thursday');
//         break;
//     case '5' :
//         console.log('Friday');
//         break;
//     case '6' :
//         console.log('Saturday');
//         break;
//     case '7' :
//         console.log('Sunday');
//         break;
//

// }


// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let a = 9;
// let b = 6;
// if (a>b) {
//     console.log(a);
// } else if (b<a) {
//     console.log(b);
// } else if (a===b) {
//     console.log('equal');
// } else {
//     console.log('error');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
//     код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х
//     являється falsy (хибноподыбне, тобто кастується до false)

