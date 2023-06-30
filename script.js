"use strict"

let numberOfFilms = prompt('How many movies did you watch?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i =0; i < 2; i++) {
    const a = prompt('One of the latest watched movies?', ''),
          b = prompt('What rank do you give that film?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; //Завдяки декріменту ми повертаємо користувача на крок назад
    }
}

console.log(personalMovieDB);