"use strict";

const numberOfFilms = 'Сколько фильмов вы уже посмотрели?';

const personalMovieDB = {
    count: 15,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const ratingLastFilm = prompt('На сколько оцените его?', '');

personalMovieDB['movies'] = lastFilm;

console.log(personalMovieDB);