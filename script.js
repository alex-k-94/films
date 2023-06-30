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

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);