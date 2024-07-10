const fs = require('fs');
const Movie = require('../models/Movie');



const movieData = JSON.parse(fs.readFileSync('db/movie-data.json', 'utf-8'));

Movies = movieData.map(movie => new Movie(movie));

module.exports = Movies;