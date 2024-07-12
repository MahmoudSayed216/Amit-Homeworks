const moviesServices = require('../services/MoviesServices');


exports.c_getAllMoviesNames = async (req, res) =>{
    const moviesNames = await moviesServices.getAllMoviesNames();
    console.log(moviesNames);
    res.status(200).json({moviesNames});
}

exports.c_getOneMovieData = async (req, res)=>{
    const targetMovie = await moviesServices.getOneMovieData(req.params.id);
    console.log("_________________");
    if(targetMovie === undefined || targetMovie == null){
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID',
          });
    }
    console.log(targetMovie);
    res.status(200).json(targetMovie)
}

exports.c_addOneMovie = (req, res)=>{
    moviesServices.addOneMovie(req.body)
        .then(res.status(200).json({}))
        .catch((err)=>{console.log(err)});
}

exports.c_updateOneMovie = async (req, res)=>{
    const updatedMovie = await moviesServices.updateOneMovie(req.params.id, req.body);
    if(updatedMovie == undefined)
        return res.status(404);

    res.status(200).json({
        status : 'successfully updated',
        updatedMovie
    });
}


exports.c_deleteOneMovie = (req, res) =>{
    moviesServices.deleteOneMovie(req.params.id);
    res.status(200).json({
        message :  'movie was deleted successfully',
    })
}