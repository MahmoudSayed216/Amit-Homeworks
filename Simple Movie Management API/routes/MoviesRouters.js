const express = require('express');
const moviesControllers = require('../controllers/MoviesController');
const moviesRouter = express.Router();

moviesRouter
    .route('/')
    .get(moviesControllers.c_getAllMoviesNames)
    .post(moviesControllers.c_addOneMovie);

moviesRouter
    .route('/:id')
    .get(moviesControllers.c_getOneMovieData)
    .patch(moviesControllers.c_updateOneMovie)
    .delete(moviesControllers.c_deleteOneMovie);




module.exports = moviesRouter;