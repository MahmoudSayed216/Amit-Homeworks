const { ObjectId } = require('mongodb');
const MoviesDB = require('../db/database');




const getAllMoviesNames = async ()=>{
    const movies = await MoviesDB.collection.find({}, {projection:{title:1, _id:0}}).toArray()
    return movies;
}

const getOneMovieData = async (id) =>{
    try{
        const movieData = await MoviesDB.collection.findOne({_id: new ObjectId(id)});
    }
    catch(err){
        return undefined;
    }
    return movieData;
}

const addOneMovie = async (movieData) =>{
    const addedMovie = await MoviesDB.collection.insertOne(movieData);
    return addedMovie;
} 

const updateOneMovie = async (id, body) =>{
    try{
        const movieToBeUpdated = await MoviesDB.collection.findOne({_id: new ObjectId(id)});
        for(const key in movieToBeUpdated){
            if(body[key] !== undefined)
                movieToBeUpdated[key] = body[key];
        }
        const result = await MoviesDB.collection.replaceOne({ _id: new ObjectId(id) }, movieToBeUpdated);
        return result;
    }
    catch(err){
        console.log(err);
        return undefined;
    }
    
}

const deleteOneMovie = async (id) =>{
    const deleted = MoviesDB.collection.deleteOne({_id: new ObjectId(id)});
    return deleted;
}



module.exports = {getAllMoviesNames, getOneMovieData, addOneMovie, updateOneMovie, deleteOneMovie};