class Movie{
    constructor(jsonObj){
        this.id = jsonObj.id;
        this.title = jsonObj.title;
        this.year = jsonObj.year;
        this.director = jsonObj.director;
        this.genre = jsonObj.genre;
        this.rating = jsonObj.rating;
    }
}

module.exports = Movie;