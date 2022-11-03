// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let elements = [135, 422, 'monday', false, -246, true, 554, 'qwerty', 'asdf', 112233]
console.log(elements);
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);
console.log(elements[4]);
console.log(elements[5]);
console.log(elements[6]);
console.log(elements[7]);
console.log(elements[8]);
console.log(elements[9]);
console.log(elements[10]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Devil Wears Prada',
    pageCount: 360,
    genre: 'chick lit'
}
let book2 = {
    title: 'Mein Kampf',
    pageCount: 257,
    genre: 'autobiography'
}
let book3 = {
    title: 'It',
    pageCount: 1344,
    genre: 'horror'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book4 = {
    title: 'Le Petit Prince',
    pageCount: 128,
    genre: 'philosophical tale',
    authors: [{name: 'Antoine de Saint-Exupery', age: 44}]
}
let book5 = {
    title: 'Death on the Nile',
    pageCount: 368,
    genre: 'whodunit',
    authors: [{name: 'Agatha Christie', age: 85}]
}
let book6 = {
    title: 'Carrie',
    pageCount: 254,
    genre: 'horror',
    authors: [{name: 'Stephen King', age: 75}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
    {name: 'Ivan', username:'vanya15', password:'12345678'},
    {name: 'Mykola', username:'kolya007', password:'88888880'},
    {name: 'Olha', username:'olya@1', password:'qwerty1'},
    {name: 'Maria', username:'masha25', password:'asdfg00'},
    {name: 'Stepan', username:'styopa$$$', password:'qazwsx02'},
    {name: 'Oleh', username:'oleh*', password:'zxcvb$'},
    {name: 'Anton', username:'anton000', password:'tgbyhn123'},
    {name: 'Iryna', username:'ira051', password:'zseqsc555'},
    {name: 'Kateryna', username:'katya555', password:'rdxwdv2'},
    {name: 'Oleksandr', username:'sashka00', password:'00000000'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
