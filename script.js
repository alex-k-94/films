"use strict"

let numberOfFilms = prompt('How many movies did you watch?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};