"use strict"

let numberOfFilms = prompt('How many movies did you watch?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the latest watched movies?'),
      b = prompt('What rank do you give that film?'),
      c = prompt('One of the latest watched movies?'),
      d = prompt('What rank do you give that film?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);