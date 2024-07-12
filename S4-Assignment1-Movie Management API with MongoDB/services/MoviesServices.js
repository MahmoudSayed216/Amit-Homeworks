const MovieDAL = require('../DAL/MovieDAL');
const Movie = require('../models/Movie');


const getAllMoviesNames = async()=>{
    const movies = await MovieDAL.getAllMoviesNames(); 
    // return movies.map(el => el.title);
    console.log(movies);
    return movies;
}


const getOneMovieData = async (id) =>{
    const movieData = await MovieDAL.getOneMovieData(id);
    return movieData;
}

const addOneMovie = async (movieData)=>{
    const addedMovie = await MovieDAL.addOneMovie(movieData);
    console.log(addedMovie);
    return addedMovie;
}


const updateOneMovie = async (id, body) =>{
    const updatedMovie = await MovieDAL.updateOneMovie(id, body);
    return updatedMovie;
}


const deleteOneMovie = async (id)=>{
    const deleted = await MovieDAL.deleteOneMovie(id);
}

module.exports = {getAllMoviesNames, getOneMovieData, addOneMovie, updateOneMovie, deleteOneMovie};