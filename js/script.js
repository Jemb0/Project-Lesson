"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько его оцените?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);

if (4 == 3) {
    console.log('Три равно трём');
} else {
    console.log('Error');
}

const number = 667

if (number > 668) {
    console.log('Поезр');
} else if (number < 666) {
    console.log('Морген чтоли');
} else {
    console.log('Гуд!');
}

(number === 50) ? console.log('Гуд') : console.log('Error');

const num = 1232

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 12:
        console.log('Гуд');
        break;
    default:
        console.log('не в этот раз');
        break;
}

let numb = 123;

while (numb < 130) {
    console.log(numb);
    numb++;
}

do {
    console.log(numb);
    numb++;
}
while (numb < 130);

for (let i = 1; i < 12; i++) {
    console.log(numb);
    numb++;
}

for (let i = 1; i < 10; i++;) {
    if (i === 8)  {
        break;
    }
}