const Movies = require('../db/database');


const getAllMoviesFromDB = ()=>{
    return Movies;
}


module.exports = {getAllMoviesFromDB};