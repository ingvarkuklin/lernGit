"use strict";

let A = 0;
console.log("string" * 9);


const obj = {
    name: "Igor",
    age: 23,
    isMarried: false
};
console.log(obj.name);

const arr = ['Игорь', 'Kuklin', 23, 'no married'];
console.log(arr[1]);

//alert('Hello, World');

//const result = confirm("Are you here?");
//console.log(result);

/*const answer = +prompt("вам есть 18 лет", "18");
console.log(answer);
console.log(typeof(answer));*/


//const answer = prompt("Вам есть есть 18 лет?", "");
//console.log(answer + 5); // Склейка значения answer и 5
/*console.log(typeof(answer + 5)); это будет строковым значением, а если добавить "+" перед promt  то тип данных будет
числовым*/

//ставим знак + перед promt
//const aNswer = +prompt("Вам есть есть 18 лет?", "");
//console.log(aNswer + 5); //(сумма двух числел)
//console.log(typeof(aNswer)); // здесь уже будет числовое значение, так как перед promt  знак +
/*const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''), // НАзвание фильма
      b = prompt('На сколько оцените его?', ''), // Оценка фильма
      c = prompt('Один из последних просмотренных фильмов?', ''), // НАзвание фильма
      d = prompt('На сколько оцените его?', ''); // Оценка фильма

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
