const moviesServices = require('../services/MoviesServices');


exports.c_getAllMoviesNames = (req, res) =>{
    const moviesNames = moviesServices.getAllMoviesNames();
    res.status(200).send(moviesNames);

}

exports.c_getOneMovieData = (req, res)=>{
    const targetMovie = moviesServices.getOneMovieData(req.params.id);
    if(targetMovie === undefined || targetMovie == null){
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID',
          });
    }
    res.status(200).json(targetMovie)
}

exports.c_addOneMovie = (req, res)=>{
    moviesServices.addOneMovie(req.body);
    res.status(200).json({})
}

exports.c_updateOneMovie = (req, res)=>{
    const updatedMovie = moviesServices.updateOneMovie(req);
    if(updatedMovie == null)
        return res.status(404);

    res.status(200).json({
        status : 'successfully updated',
        updatedMovie
    });
}


exports.c_deleteOneMovie = (req, res) =>{
    moviesServices.deleteOneMovie(req.params.id);
    res.status(200).json({
        message :  'movie deleted successfully',

    })
}