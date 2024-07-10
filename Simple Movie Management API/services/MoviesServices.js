const MovieDAL = require('../DAL/MovieDAL');
const Movie = require('../models/Movie');
const utils = require('../utils/HelperFunctions');

const Movies = MovieDAL.getAllMoviesFromDB();
const deleteIDsQueue = [];




const getAllMoviesNames = ()=>{
    const moviesNames = Movies
    .map(movie => movie !== null ? movie.title : null)
    .filter(title => title !== null);
    return moviesNames;
}


const getOneMovieData = (id) =>{
    return Movies[id-1];
}

const addOneMovie = (movie)=>{
    const newID = deleteIDsQueue.pop() ||  Movies.length + 1;
    const newMovie = new Movie({id: parseInt(newID), ...movie});
    Movies[newID-1] = newMovie;  
    console.log(Movies);
}


const updateOneMovie = (req) =>{
    const movieToBeUpdated = Movies[req.params.id-1];
    if(movieToBeUpdated == null) return null;
    for(const key in movieToBeUpdated){
        if(req.body[key] !== undefined)
            movieToBeUpdated[key] = req.body[key];
    }
    Movies[req.params.id-1] = movieToBeUpdated;
    console.log(Movies);
    return movieToBeUpdated;
}


const deleteOneMovie = (id)=>{
    if(Movies[id-1] != null){
        deleteIDsQueue.push(id);
        Movies[id-1] = null;
    }
    console.log(deleteIDsQueue);
}

module.exports = {getAllMoviesNames, getOneMovieData, addOneMovie, updateOneMovie, deleteOneMovie};